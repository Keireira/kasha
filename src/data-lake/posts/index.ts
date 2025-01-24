import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';

export const threadsSlice = createSlice({
	name: 'posts',
	initialState: {},
	selectors,
	reducers
});

const actions = threadsSlice.actions;

/**
 * Export redux
 */
export { selectors, reducers, actions };
export default threadsSlice.reducer;

/**
 * Export types
 */
export * from './posts.d';
