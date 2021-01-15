import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchBookAuthorCollection } from '../book/bookActions';
import { fetchUpdateAuthor, fetchAddAuthor } from './authorActions';

const authorsAdapter = createEntityAdapter({
    // set key value (default = id)
    selectId: (author) => author.id,
    // set sorted value (default = key)
    sortComparer: (a, b) => a.fullName.localeCompare(b.fullName),
});

const slice = createSlice({
    name: 'author',
    initialState: authorsAdapter.getInitialState(),
    reducers: {

    },
    extraReducers: {
        //  --- fetchBookAuthorCollection --- all stats
        [fetchBookAuthorCollection.pending]: (draft, { payload }) => {

        },
        [fetchBookAuthorCollection.fulfilled]: (draft, { payload }) => {
            authorsAdapter.setAll(draft, payload.authors);
        },
        [fetchBookAuthorCollection.rejected]: (draft, { payload }) => {

        },

        //  --- fetchUpdateAuthor --- all stats
        [fetchUpdateAuthor.fulfilled]: (draft, { payload }) => {
            authorsAdapter.upsertOne(draft, payload);
        },
        // ---- Short version
        // [fetchUpdateAuthor.fulfilled]: authorsAdapter.upsertOne,

        //  --- fetchAddAuthor --- only fulfilled
        [fetchAddAuthor.fulfilled]: (draft, { payload }) => {
            authorsAdapter.addOne(draft, payload.author);
        },
    }
});

export default slice.reducer;

export const {

} = slice.actions;
