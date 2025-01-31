import Fuse from 'fuse.js';
import { createSelector } from '@reduxjs/toolkit';

import type { CountriesSlice } from './countries.d';

export const countriesSelector = createSelector([(store) => store.countries], (countries: CountriesSlice) => countries);

export const allCountriesSelector = createSelector([countriesSelector], (countries) => {
	return countries.allIds.map((id) => countries.byId[id]);
});

export const searchSelector = createSelector([countriesSelector], (countries) => countries.searchQuery);

export const filteredCountriesSelector = createSelector(
	[allCountriesSelector, searchSelector],
	(allCountries, searchQuery) => {
		const withQuery = searchQuery.length > 0;

		if (withQuery) {
			const fuse = new Fuse(allCountries, {
				keys: ['name', 'alpha_2'],
				threshold: 0.3
			});

			return fuse.search(searchQuery).map((result) => result.item);
		}

		return allCountries;
	}
);

export const countryByIdSelector = createSelector(
	[countriesSelector, (_, countryId: string) => countryId],
	(countries, countryId) => countries.byId[countryId]
);
