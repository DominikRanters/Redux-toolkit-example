import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpMethod, request } from 'chayns-helper';
import { sleep } from '../../utils/simulations';

export const fetchBookAuthorCollection = createAsyncThunk(
    'global/fetchBookAuthorCollection',
    async (arg , { rejectWithValue }) => {

        // simulate backend waiting time
        await sleep(2000);

        const result = await request.fetch(
            `/../src/constants/data.json`,
            {
                method: HttpMethod.Get
            },
            'fetchBookAuthorCollection',
            {}
        );

        if (result.status === 200) {
            return result.data;
        }

        return rejectWithValue();
    }
);

export const fetchAddAuthor = createAsyncThunk(
    'global/fetchAddAuthor',
    async (newAuthor , { rejectWithValue, getState }) => {
        const { author } = getState();

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

        const newBookId = author.authors.length + 5;
        const newAuthorId = author.authors.length + 1;

        // eslint-disable-next-line no-param-reassign
        newAuthor.id = newAuthorId;
        // eslint-disable-next-line no-param-reassign
        newAuthor.books[0].id = newBookId;

        return newAuthor;
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
