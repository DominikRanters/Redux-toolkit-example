import { ADD_AUTHOR, LOAD_AUTHORS, UPDATE_AUTHOR } from '../action/authorActions';

const initialState = {
    isLoading: false,
    authors: []
}

const authorReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_AUTHORS:
            return ({
                ...state,
                authors: action.data,
            })
        case UPDATE_AUTHOR:
            const newAuthorData = action.data;
            const index = state.authors.findIndex(author => author.id === newAuthorData.id);
            const authors = [...state.authors];

            authors[index] = {
                ...authors[index],
                fullName: newAuthorData.fullName,
            };

            return ({
                ...state,
                authors: authors
            })
        case ADD_AUTHOR:

            return {
                authors: [
                    ...state.authors,
                    action.data
                ],
            };
        default:
            return state;
    }
};

export default authorReducer;
