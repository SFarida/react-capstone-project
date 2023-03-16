import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import countriesReducer from './countries/countriesSlice';

const logger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
