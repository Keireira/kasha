import React from 'react';
import { useSelector } from 'react-redux';

import { countryByIdSelector } from '@data/countries/selectors';

import Root from './stats.styles';

import type { Props } from './stats.d';

const CountryStats = ({ countryId }: Props) => {
	const country = useSelector((state) => countryByIdSelector(state, countryId));

	if (!country) {
		return null;
	}

	return (
		<Root>
			<h1>Population</h1>
			<p>{country.population}</p>
		</Root>
	);
};

export default CountryStats;
