import { createSlice } from '@reduxjs/toolkit';

import { STORE_SLICE } from '../constants';

import { fetchImages } from './imagesThunk';


const initialState = {
  isLoading: true,
  images: [],
  error: '',
  selectedCategory: undefined
};

const imagesSlice = createSlice({
  name: STORE_SLICE.images,
  initialState,
  reducers: {
    setCategory: (state, { payload }) => ({
      ...state,
      isLoading: false,
      selectedCategory: payload,
    })
  },
  extraReducers: {
    [fetchImages.pending as any]: (state: any) => ({
      ...state,
      isLoading: true,
      error: '',
    }),
    [fetchImages.rejected as any]: (state: any, { payload }: any) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [fetchImages.fulfilled as any]: (state: any, { payload }: any) => ({
      ...state,
      isLoading: false,
      images: payload,
    }),
  },
});

export const { reducer: imagesReducer } = imagesSlice;
export const { setCategory } = imagesSlice.actions;