import React from 'react';

import { countriesList } from '@assets/datasets';

import CountryCard from './country-card';
import Root from './countries-list.styles';

import type { Props } from './countries-list.d';

const CountriesList = (_props: Props) => {
	return (
		<Root>
			{countriesList.map((country) => {
				return <CountryCard key={country.alpha_2} {...country} />;
			})}
		</Root>
	);
};

export default CountriesList;
