import React from 'react';

import { countriesList } from '@assets/datasets';

import CountryCard from './country-card';
import SearchCountries from './search-countries';
import Root, { Countries } from './countries-list.styles';

import type { Props } from './countries-list.d';

const CountriesList = (_props: Props) => {
	return (
		<Root>
			<SearchCountries />

			<Countries>
				{countriesList.map((country) => (
					<CountryCard key={country.alpha_2} {...country} />
				))}
			</Countries>
		</Root>
	);
};

export default CountriesList;
