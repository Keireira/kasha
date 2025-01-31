import type { CountriesSlice } from './countries';

const initialState: CountriesSlice = {
	allIds: [],
	byId: {},
	searchQuery: ''
};

export default initialState;
