import { createAsyncThunk } from '@reduxjs/toolkit';

import HttpService from '../../services/HttpService';

export const fetchImages = createAsyncThunk<any, number>
  ('/fetchImages', async (args, { rejectWithValue }) => {
    const limitedCount = args;

    try {
      return HttpService.getImages(limitedCount);
    } catch (error) {
      return rejectWithValue(error);
    }
  });