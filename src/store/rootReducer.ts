import { combineReducers } from '@reduxjs/toolkit';

import { STORE_SLICE } from './constants';

import { categoriesReducer } from './categories/categoriesSlice';

import { imagesReducer } from './images/imagesSlice';

export default combineReducers({
  [STORE_SLICE.categories]: categoriesReducer,
  [STORE_SLICE.images]: imagesReducer
});
