import { fetchDataFromApi } from 'chayns-components/lib/utils/fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAddAuthor = createAsyncThunk(
    'global/fetchAddAuthor',
    async (body , { rejectWithValue, getState }) => {
        const { book, author } = getState();

        // --------- Do fetch --------
        // const result = await request.fetch(
        //     `/../src/constants/data.json`,
        //     {
        //         method: HttpMethod.Get
        //     },
        //     'fetchBookAuthorCollection',
        //     {}
        // );

        // Set Ids (because I have no backend)
        const newBookId = book.ids.length + 1;
        const newAuthorId = author.ids.length + 1;

        body.book.id = newBookId;
        body.book.authorId = newAuthorId;
        body.author.id = newAuthorId;
        body.author.bookIds = [newBookId];

        return body;
    }
);

export const fetchUpdateAuthor = createAsyncThunk(
    'author/fetchUpdateAuthor',
    async (body , { rejectWithValue }) => {

        /*   Do your update fetch
        const erg = await fetchDataFromApi('PATCH', null, body, true);
        */

        return body;

        //return rejectWithValue();
    }
);

