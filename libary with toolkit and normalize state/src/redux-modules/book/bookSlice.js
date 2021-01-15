import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchBookAuthorCollection } from './bookActions';
import { fetchAddAuthor } from '../author/authorActions';

const booksAdapter = createEntityAdapter();

const slice = createSlice({
    name: 'book',
    initialState: {
        ...booksAdapter.getInitialState(),
        isLoading: false,
    },
    reducers: {

    },
    extraReducers: {
        //  --- fetchBookAuthorCollection --- all stats
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

        //  --- fetchAddAuthor --- only fulfilled
        [fetchAddAuthor.fulfilled]: (draft, { payload }) => {
            booksAdapter.addOne(draft, payload.book);
        },
    }
});

export default slice.reducer;

export const {

} = slice.actions;
