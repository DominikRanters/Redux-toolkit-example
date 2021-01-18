// Get Data from the redux store

export const selectAuthorStore = (state) => state.author;
export const selectAuthorList = (state) => state.author.authors;
export const selectAuthorIsLoading = (state) => state.author.isLoading;
