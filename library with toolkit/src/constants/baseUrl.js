import { IS_PRODUCTION, IS_STAGING } from './enviroment';

const devUrl = 'localhost:8080';
const stagingUrl = '';
const liveUrl = '';

// eslint-disable-next-line no-nested-ternary
export const baseUrl = IS_PRODUCTION ? liveUrl : (IS_STAGING ? stagingUrl : devUrl);

