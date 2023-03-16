import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://date.nager.at/api/v3/';

const initialState = {
  allCountries: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const getCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get(`${baseUrl}AvailableCountries`);
  const { data } = response;
  const countriesArr = [];
  for (let i = 0; i < data.length; i += 1) {
    countriesArr.push({
      countryCode: data[i].countryCode,
      name: data[i].name,
      info: [],
    });
  }
  return countriesArr;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => (
        {
          ...state,
          status: 'loading',
        }
      ))
      .addCase(getCountries.rejected, (state, action) => (
        {
          ...state,
          status: 'failed',
          error: action.error.message,
        }
      ))
      .addCase(getCountries.fulfilled, (state, action) => {
        const data = action.payload;
        return {
          ...state,
          allCountries: data,
          status: 'succeeded',
        };
      });
  },
});

export default countriesSlice.reducer;
