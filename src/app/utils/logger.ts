export type ILogType = string | 'none' | 'error' | 'warn' | 'info' | 'debug';

export const LEVELS: {
  [k in ILogType]: number;
} = {
  none: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
};

const _defaultOptions = {
  level: 'error', // Default logger level as error only
  showLevel: false, // default do not show level name
  timestamp: false, // default do not show timestamp
};

const _initializeLogger = (logger: any, output: any, options: any) => {
  [
    {
      level: 'error',
      functionName: 'error',
    },
    {
      level: 'warn',
      functionName: 'warn',
    },
    {
      level: 'info',
      functionName: 'info',
    },
    {
      level: 'debug',
      functionName: 'info',
    },
  ].forEach(({ level, functionName }: { level: ILogType; functionName: string }) => {
    const currentLevelNumber: number = LEVELS[level];
    const currentLogFunc = (...args: any) => {
      if (currentLevelNumber <= options.level) {
        if (options.showLevel) {
          args = [`[${level}]`, ...args];
        }
        if (options.timestamp) {
          args = [`[${new Date().toISOString()}]`, ...args];
        }
        output[functionName].apply(output, args);
      }
    };

    if (options.level === currentLevelNumber) {
      logger.log = currentLogFunc;
    }
    logger[level] = currentLogFunc;
  });
};

class AppLogger {
  _output: object;
  _options: { [key: string]: any };

  none = (...args: any): void | any => {};
  error = (...args: any): void | any => {};
  warn = (...args: any): void | any => {};
  info = (...args: any): void | any => {};
  debug = (...args: any): void | any => {};

  constructor(output: object, options: { [key: string]: any } = {}) {
    this._output = output;
    this._options = {
      ..._defaultOptions,
      ...options,
      level: LEVELS[options.level || _defaultOptions.level] || LEVELS['info'],
    };

    // Initialize logger by options
    _initializeLogger(this, output, this._options);
  }
}

export default AppLogger;
