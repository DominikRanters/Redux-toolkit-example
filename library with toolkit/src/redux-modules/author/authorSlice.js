import { createSlice } from '@reduxjs/toolkit';
import { fetchAddAuthor, fetchUpdateAuthor, fetchBookAuthorCollection } from "./authorActions";

const slice = createSlice({
    name: 'author',
    initialState: {
        isLoading: false,
        authors: [],
    },
    reducers: {

    },
    extraReducers: {
        //  --- fetchBookAuthorCollection --- all stats
        [fetchBookAuthorCollection.pending]: (draft, { payload }) => {
            draft.isLoading = true;
        },
        [fetchBookAuthorCollection.fulfilled]: (draft, { payload }) => {
            draft.authors = payload;
            draft.isLoading = false;

            return draft;
        },
        [fetchBookAuthorCollection.rejected]: (draft, { payload }) => {
            draft.isLoading = false;
        },

        //  --- fetchUpdateAuthor --- only fullfilled
        [fetchUpdateAuthor.fulfilled]: (draft, { payload }) => {
            const index = draft.authors.findIndex(author => author.id === payload.id);
            const author = draft.authors[index];

            draft.authors[index] = {
                ...author,
                fullName: payload.fullName
            };
        },

        //  --- fetchAddAuthor --- only fullfilled
        [fetchAddAuthor.fulfilled]: (draft, { payload }) => {
            draft.authors.push(payload);
        },
    }
});

export default slice.reducer;

export const {

} = slice.actions;
