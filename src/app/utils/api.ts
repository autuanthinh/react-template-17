import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import _ from 'lodash';
import Config from 'app/config';
import { localStorage } from 'app/utils';
import { Object } from 'app/types';
// import queryString from 'query-string';
// import { message } from 'antd';

type optionsType = object | undefined | null;

export class Api {
  instance: AxiosInstance;
  getDefaultHeader?(): Object<any> {
    return { 'content-type': 'application/json' };
  }

  constructor(instance?: AxiosInstance, getDefaultHeader?: () => Object<any>) {
    if (instance) {
      this.instance = instance;
      this.getDefaultHeader = getDefaultHeader;
    } else {
      this.instance = axios.create({
        baseURL: Config.MSS_SERVICES_URL,
      });
    }
  }

  getDefaultOptions(isAuth = true) {
    // const token = cookie.getItem(cookie.keys.TOKEN) || null;
    // let auth = isAuth ? { Authorization: 'Bearer ' + token } : {};
    return {
      headers: {
        ...(typeof this.getDefaultHeader === 'function' ? this.getDefaultHeader() : {}),
        // ...auth,
      },
    };
  }

  attachToken(payload: any = {}) {
    const token = localStorage.getItem('token');

    return {
      ...payload,
      Token: token,
    };
  }

  handleError(error: AxiosError) {
    if (error.message === 'Network Error') {
      // Toast.error('Network error!');
    } else if (error.response && error.response.status === 403) {
      //   if (error.response.data) {
      //     if (error.response.data.message === 'UserRoleInvalid') {
      //       message.error('User permission is denied!');
      //       global.store.dispatch(logout());
      //     }
      //   }
    }
  }

  async createPromise(response: Promise<AxiosResponse>): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      response.then(
        (result: any) => {
          resolve(result);
        },
        error => {
          this.handleError(error);
          reject(error);
        }
      );
    });
  }

  fetch(url: string, options = {}) {
    return this.createPromise(this.get(url, options, false));
  }

  get(url: string, options: any = {}, isAuth = true): Promise<AxiosResponse> {
    const finalOptions = _.merge(this.getDefaultOptions(isAuth), options);
    return this.createPromise(this.instance.get(url, finalOptions));
  }

  put(url: string, payload: any = null, options: any = {}, isAuth = true): Promise<AxiosResponse> {
    const finalOptions = _.merge(this.getDefaultOptions(isAuth), options);
    const finalPayload = this.attachToken(payload);
    return this.createPromise(this.instance.put(url, finalPayload, finalOptions));
  }

  post(url: string, payload: any = null, options: optionsType = {}, isAuth = true): Promise<AxiosResponse> {
    const finalOptions = _.merge(this.getDefaultOptions(isAuth), options);
    const finalPayload = this.attachToken(payload);
    return this.createPromise(this.instance.post(url, finalPayload, finalOptions));
  }

  delete(url: string, payload: any = null, options: any = {}, isAuth = true): Promise<AxiosResponse> {
    const finalOptions: AxiosRequestConfig = _.merge(this.getDefaultOptions(isAuth), options);
    const finalPayload = this.attachToken(payload);

    if (finalPayload) {
      finalOptions.data = finalPayload;
    }

    return this.createPromise(this.instance.request({ method: 'DELETE', url, ...finalOptions }));
  }
}

export default new Api();
