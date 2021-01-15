const buildEnv = process.env.BUILD_ENV || 'development';

export const IS_PRODUCTION = buildEnv === 'production';

export const IS_STAGING = buildEnv === 'staging';

export const IS_DEV = buildEnv === 'development';

