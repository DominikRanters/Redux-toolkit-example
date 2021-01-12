import { combineReducers } from '@reduxjs/toolkit';
import authorsReducer from './authors/authorsSlice';
import booksReducer from './books/booksSlice';

export default combineReducers({
    author: authorsReducer,
    book: booksReducer,
});
