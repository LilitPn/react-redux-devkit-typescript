import { createSlice } from '@reduxjs/toolkit';
import { ICategory } from '../../routes/home/HomePage';

import { STORE_SLICE } from '../constants';
import { fetchCategories } from './categoriesThunk';

const initialState = {
  isLoading: true,
  categories: [],
  error: '',
};

const categoriesSlice = createSlice({
  name: STORE_SLICE.categories,
  initialState,
  reducers: { },
  extraReducers: {
    [fetchCategories.pending as any]: (state: any) => ({
      ...state,
      isLoading: true,
      error: '',
    }),
    [fetchCategories.rejected as any]: (state: any, { payload }: any) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [fetchCategories.fulfilled as any]: (state: any, { payload }: any) => ({
      ...state,
      isLoading: false,
      categories: payload,
    }),
  },
});

export const { reducer: categoriesReducer } = categoriesSlice;
