import React from 'react';
import { useSelector } from 'react-redux';

import { countryByIdSelector } from '@data/countries/selectors';

import Root from './about.styles';

import type { Props } from './about.d';

const CountryAbout = ({ countryId }: Props) => {
	const country = useSelector((state) => countryByIdSelector(state, countryId));

	if (!country) {
		return null;
	}

	const langTitle = (country.languages?.length ?? 0) > 1 ? 'Languages' : 'Language';

	return (
		<Root>
			<h1>{langTitle}</h1>
			<ul>{country.languages?.map((lang) => <li key={lang}>{lang}</li>)}</ul>

			<h1>Currency</h1>
			<p>{country.currency}</p>

			<h1>Capital</h1>
			<p>{country.capital}</p>
			{country.description}
		</Root>
	);
};

export default CountryAbout;
