import API from '@api';

import type { GetCountriesResT, GetCountriesReqT, GetCountryResT, GetCountryReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Get list of countries
		getAllCountries: build.query<GetCountriesResT, GetCountriesReqT>({
			query: () => ({
				url: 'https://raw.githubusercontent.com/Keireira/kasha/refs/heads/master/datasets/countries.json',
				method: 'GET'
			})
		}),
		getCountry: build.query<GetCountryResT, GetCountryReqT>({
			query: ({ countryId }) => ({
				url: `https://raw.githubusercontent.com/Keireira/kasha/refs/heads/master/datasets/about/${countryId}.json`,
				method: 'GET'
			})
		})
	})
});

export default idApi;
