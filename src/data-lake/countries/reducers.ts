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
			const id = country.alpha_2.toLowerCase();

			slice.byId[id] = {
				...country,
				alpha_2: id
			};

			slice.allIds = [...new Set([...slice.allIds, id])];
		});
	},
	prepare: (payload: CountryT[]) => ({ payload })
};

export const setCountry = {
	reducer: (slice: CountriesSlice, action: PayloadAction<CountryT>) => {
		const country = action.payload;
		const id = country.alpha_2.toLowerCase();

		slice.byId[id] = {
			...country,
			alpha_2: id
		};

		slice.allIds = [...new Set([...slice.allIds, id])];
	},
	prepare: (payload: CountryT) => ({ payload })
};
