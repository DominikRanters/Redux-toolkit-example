import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchAddBook, fetchBookAuthorCollection } from './bookActions';

const booksAdapter = createEntityAdapter();

const slice = createSlice({
    name: 'books',
    initialState: {
        ...booksAdapter.getInitialState(),
        isLoading: false,
    },
    reducers: {

    },
    extraReducers: {
        [fetchBookAuthorCollection.pending]: (draft, { payload }) => {
            draft.isLoading = true;
        },
        [fetchBookAuthorCollection.fulfilled]: (draft, { payload }) => {
            booksAdapter.setAll(draft, payload.books);
            draft.isLoading = false;
        },
        [fetchBookAuthorCollection.rejected]: (draft, { payload }) => {
            draft.isLoading = false;
        },
        [fetchAddBook.fulfilled]: (draft, { payload }) => {
            booksAdapter.addOne(draft, payload.book);
        },
    }
});

export default slice.reducer;

export const {

} = slice.actions;
