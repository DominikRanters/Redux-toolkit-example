import { combineReducers } from '@reduxjs/toolkit';
import authorsReducer from './author/authorSlice';
import booksReducer from './book/bookSlice';

export default combineReducers({
    author: authorsReducer,
    book: booksReducer,
});
