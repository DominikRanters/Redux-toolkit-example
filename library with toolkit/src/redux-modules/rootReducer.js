import { combineReducers } from '@reduxjs/toolkit';
import authorsReducer from './author/authorSlice';

export default combineReducers({
    author: authorsReducer,
});
