import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import rootReducer from './redux-modules/rootReducer';
import { IS_PRODUCTION } from './constants/enviroment';

let loggerMiddleware;

if (!IS_PRODUCTION) {
    loggerMiddleware = [...getDefaultMiddleware(), logger]; // logger Middleware
}

const store = configureStore({
    reducer: rootReducer,
    middleware: loggerMiddleware,
});

export default store;
