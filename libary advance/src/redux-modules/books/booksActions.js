import { createAsyncThunk } from '@reduxjs/toolkit';
import '../../constants/data.json';

export const fetchBookAuthorCollection = createAsyncThunk(
    'global/fetchBookAuthorCollection',
    async (arg , { rejectWithValue }) => {

        const response = await fetch('../src/constants/data.json');
        if (response.ok) {
            return response.json();
        }

        return rejectWithValue();
    }
);
