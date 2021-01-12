// Get Data from the redux store

// get entities from books
export const selectBooksEntities = (state) => state.books.entities;

// get ids from books
export const selectBooksIds = (state) => state.books.ids;

// get book by id
export const createBookSelector = (id) => (state) => state.books.entities[id];
