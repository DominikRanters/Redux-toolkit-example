import { createAsyncThunk } from '@reduxjs/toolkit';
import '../../constants/data.json';
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

export const fetchAddBook = createAsyncThunk(
    'global/fetchAddBook',
    async (body , { rejectWithValue }) => {

        await sleep(2000);
        // --------- Do fetch --------
        // const result = await request.fetch(
        //     `/../src/constants/data.json`,
        //     {
        //         method: HttpMethod.Get
        //     },
        //     'fetchBookAuthorCollection',
        //     {}
        // );

        return body;

        if (result.status === 200) {
            return result.data;
        }

        return rejectWithValue();
    }
);
