import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';
import initialState from './initial-state';

export const countriesSlice = createSlice({
	name: 'countries',
	initialState,
	selectors,
	reducers
});

const actions = countriesSlice.actions;

/**
 * Export redux
 */
export { selectors, reducers, actions };
export default countriesSlice.reducer;

/**
 * Export types
 */
export * from './countries.d';
