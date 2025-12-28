import Config from 'react-native-config';

export const ENV = {
  API_URL: Config.API_URL || 'http://localhost:3000/api',
  ENV_NAME: Config.ENV_NAME || 'development',
  ENABLE_ANALYTICS: Config.ENABLE_ANALYTICS === 'true',
  IS_DEV: __DEV__,
  IS_PROD: Config.ENV_NAME === 'production',
  IS_STAGING: Config.ENV_NAME === 'staging',
} as const;
