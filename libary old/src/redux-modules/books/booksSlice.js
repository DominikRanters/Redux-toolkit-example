import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchBookAuthorCollection } from './booksActions';

const booksAdapter = createEntityAdapter();

const slice = createSlice({
    name: 'books',
    initialState: booksAdapter.getInitialState(),
    reducers: {

    },
    extraReducers: {
        [fetchBookAuthorCollection.pending]: (draft, { payload }) => {

        },
        [fetchBookAuthorCollection.fulfilled]: (draft, { payload }) => {
            booksAdapter.setAll(draft, payload.books);
        },
        [fetchBookAuthorCollection.rejected]: (draft, { payload }) => {

        },
    }
});

export default slice.reducer;

export const {

} = slice.actions;
