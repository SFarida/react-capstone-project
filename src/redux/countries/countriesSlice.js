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

export const getCountryDetails = createAsyncThunk('countries/fetchCountryDetails', async (code) => {
  const response = await axios.get(`${baseUrl}CountryInfo/${code}`);
  return response.data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addCountryInfo: (state, action) => ({
      ...state,
      allCountries: state.allCountries.map((country) => {
        if (country.countryCode === action.payload.countryCode) {
          return { ...country, info: action.payload };
        }
        return country;
      }),
    }),
  },
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
      })
      .addCase(getCountryDetails.pending, (state) => (
        {
          ...state,
          status: 'loading',
        }
      ))
      .addCase(getCountryDetails.rejected, (state, action) => (
        {
          ...state,
          status: 'failed',
          error: action.error.message,
        }
      ))
      // .addCase(getCountryDetails.fulfilled, (action) => action.payload);
      .addCase(getCountryDetails.fulfilled, (state, action) => {
        const data = action.payload;
        return {
          ...state,
          allCountries: state.allCountries.map((country) => {
            if (country.countryCode === data.countryCode) {
              return { ...country, info: data };
            }
            return country;
          }),
          status: 'succeeded',
        };
      });
  },
});
export const { addCountryInfo } = countriesSlice.actions;
export default countriesSlice.reducer;
