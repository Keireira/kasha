import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';
import initialState from './initial-state';

export const boardsSlice = createSlice({
	name: 'boards',
	initialState,
	selectors,
	reducers
});

const actions = boardsSlice.actions;

/**
 * Export redux
 */
export { selectors, reducers, actions };
export default boardsSlice.reducer;

/**
 * Export types
 */
export * from './boards.d';
