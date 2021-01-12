import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchBookAuthorCollection } from '../books/booksActions';
import { fetchUpdateAuthor } from './authorsActions';

const authorsAdapter = createEntityAdapter({
    // set key value (default = id)
    selectId: (book) => book.id,
    // set sorted value (default = key)
    sortComparer: (a, b) => a.id - b.id,
});

const slice = createSlice({
    name: 'authors',
    initialState: authorsAdapter.getInitialState(),
    reducers: {

    },
    extraReducers: {
        [fetchBookAuthorCollection.pending]: (draft, { payload }) => {

        },
        [fetchBookAuthorCollection.fulfilled]: (draft, { payload }) => {
            authorsAdapter.setAll(draft, payload.authors);
        },
        [fetchBookAuthorCollection.rejected]: (draft, { payload }) => {

        },
        [fetchUpdateAuthor.pending]: (draft, { payload }) => {

        },
        [fetchUpdateAuthor.fulfilled]: (draft, { payload }) => {
            authorsAdapter.upsertOne(draft, payload);
        },
        // Short version
        // [fetchUpdateAuthor.fulfilled]: authorsAdapter.upsertOne,
        //
        [fetchUpdateAuthor.rejected]: (draft, { payload }) => {

        },
    }
});

export default slice.reducer;

export const {

} = slice.actions;
