// Get Data books store from the redux
export const selectBookStore = (state) => state.book;

// get entities from books
export const selectBookEntities = (state) => state.book.entities;

// get ids from books
export const selectBookIds = (state) => state.book.ids;

// get book by id
export const createBookSelector = (id) => (state) => state.book.entities[id];
