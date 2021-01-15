import { logger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux-modules/reducer/rootReducer';
import { IS_PRODUCTION } from './constants/enviroment';

const storeMiddleware = [thunk];

if (!IS_PRODUCTION) {
    storeMiddleware.push(logger); // logger Middleware
}

const store = createStore(
    rootReducer,
    applyMiddleware(...storeMiddleware),
);


export default store;
