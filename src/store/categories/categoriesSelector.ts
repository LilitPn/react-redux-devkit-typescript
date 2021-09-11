import { createSelector } from 'reselect';

import { STORE_SLICE } from '../constants';


export const categoriesDataSelector = (state: any) => state[STORE_SLICE.categories];

export const categoryLoadingSelector = createSelector(categoriesDataSelector, userData => userData.isLoading);
export const categoryErrorSelector = createSelector(categoriesDataSelector, userData => userData.error);
export const categorySelector = createSelector(categoriesDataSelector, userData => userData.categories);
