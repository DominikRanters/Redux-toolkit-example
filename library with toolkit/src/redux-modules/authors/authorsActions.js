import { fetchDataFromApi } from 'chayns-components/lib/utils/fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
