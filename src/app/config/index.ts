import { ILogType } from 'app/utils/logger';

declare interface AppConfig {
  LOG_LEVEL?: string | ILogType;

  VALIDATE_URL: string;
  DOMAIN_URL: string;
  MSS_SERVICES_URL: string;
  SIGN_IN_URL: string;
}

global.env = process.env;

const Config: AppConfig = {
  LOG_LEVEL: process.env.LOG_LEVEL,

  VALIDATE_URL: process.env.REACT_APP_VALIDATE_URL as string,
  DOMAIN_URL: process.env.REACT_APP_DOMAIN_URL as string,
  MSS_SERVICES_URL: process.env.REACT_APP_MSS_SERVICES_URL as string,
  SIGN_IN_URL: process.env.REACT_APP_SIGN_IN_URL as string,
};

export default Config;
