// Get Data book store from the redux
export const selectBookStore = (state) => state.book;

// get isLoading from book
export const selectBookIsLoading = (state) => state.book.isLoading;

// get entities from book
export const selectBookEntities = (state) => state.book.entities;

// get ids from book
export const selectBookIds = (state) => state.book.ids;

// get book by id
export const createBookSelector = (id) => (state) => state.book.entities[id];
