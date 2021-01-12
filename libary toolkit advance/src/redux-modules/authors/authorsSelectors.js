// Get Data from the redux store

export const selectAuthorsEntities = (state) => state.authors.entities;
export const selectAuthorsIds = (state) => state.authors.ids;

export const createAuthorSelector = (id) => (state) => state.authors.entities[id];
