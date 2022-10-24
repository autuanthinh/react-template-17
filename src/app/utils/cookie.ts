import Cookies, { CookieAttributes } from 'js-cookie';
import _ from 'lodash';
import moment from 'moment';

// const optionInit = {
//     // expires: new Date(),
//     // path: '/',
//     // domain: `.${domain}`,
// };

class Cookie {
  keys = {
    TOKEN: 'token',
  };

  setItem(key: string, value: any, option: object, onlyDomain: boolean = true): void {
    Cookies.set(key, value, this.calcOption(option, onlyDomain));
  }

  getItem(key: string): string | undefined {
    return Cookies.get(key);
  }

  getItemJson(key: string): any {
    try {
      const value: any = Cookies.get(key);
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }

  setItemJson(key: string, value: any, option: any, onlyDomain = true): void {
    Cookies.set(key, JSON.stringify(value), this.calcOption(option, onlyDomain));
  }

  removeItem(key: string, option: any, onlyDomain = true): void {
    Cookies.remove(key, this.calcOption(option, onlyDomain));
  }

  calcOption(option: any, onlyDomain = true): CookieAttributes {
    let calcOption: any = typeof option === 'object' ? _.cloneDeep(option) : {};
    if (!calcOption.domain && onlyDomain) {
      const host = window.location.host;
      const hostSegments = host.split(':')[0].split('.');
      const domain = hostSegments.splice(-2).join('.');
      calcOption.domain = `.${domain}`;
    }

    if (!(calcOption.expires instanceof Date)) {
      let expiredDate = null;
      if (calcOption.expires > 0) {
        expiredDate = new Date(calcOption.expires);
      } else {
        expiredDate = moment().add(30, 'minutes').toDate();
      }
      calcOption.expires = expiredDate;
    }

    return calcOption;
  }
}

export default new Cookie();
