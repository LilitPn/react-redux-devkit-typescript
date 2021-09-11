import { createAsyncThunk } from '@reduxjs/toolkit';

import HttpService from '../../services/HttpService';



export const fetchCategories = createAsyncThunk(
  '/fetchCategories', async (args, { rejectWithValue }) => {
    try {
      return HttpService.getCategories();
    } catch (error) {
      return rejectWithValue(error);
    }
  });
