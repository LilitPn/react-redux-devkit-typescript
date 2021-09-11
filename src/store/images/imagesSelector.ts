import { createSelector } from 'reselect';

import { STORE_SLICE } from '../constants';


export const imagesDataSelector = (state: any) => state[STORE_SLICE.images];

export const imagesLoadingSelector = createSelector(imagesDataSelector, userData => userData.isLoading);
export const imagesErrorSelector = createSelector(imagesDataSelector, userData => userData.error);
export const imagesSelector = createSelector(imagesDataSelector, userData => userData.images);
export const seletedCategory = createSelector(imagesDataSelector, userData => userData.selectedCategory);