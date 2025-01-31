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

	return <Root>About</Root>;
};

export default CountryAbout;
