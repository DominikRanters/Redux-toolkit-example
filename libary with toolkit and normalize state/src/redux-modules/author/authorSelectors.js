// Get Data from the redux store

export const selectAuthorEntities = (state) => state.author.entities;
export const selectAuthorIds = (state) => state.author.ids;

export const createAuthorSelector = (id) => (state) => state.author.entities[id];
