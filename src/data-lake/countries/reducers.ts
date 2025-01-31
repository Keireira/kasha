import type { PayloadAction } from '@reduxjs/toolkit';
import type { CountryT, CountriesSlice } from './countries.d';

export const updateSearch = {
	reducer: (slice: CountriesSlice, action: PayloadAction<CountriesSlice['searchQuery']>) => {
		const searchQuery = action.payload;

		slice.searchQuery = searchQuery;

		return slice;
	},
	prepare: (payload: CountriesSlice['searchQuery']) => ({ payload })
};

export const updateCountries = {
	reducer: (slice: CountriesSlice, action: PayloadAction<CountryT[]>) => {
		const countries = action.payload;

		countries.forEach((country) => {
			slice.byId[country.alpha_2] = country;

			slice.allIds = [...new Set([...slice.allIds, country.alpha_2])];
		});
	},
	prepare: (payload: CountryT[]) => ({ payload })
};
