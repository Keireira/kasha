import React from 'react';
import { useSelector } from 'react-redux';

import { countryByIdSelector } from '@data/countries/selectors';

import Root from './reviews.styles';

import type { Props } from './reviews.d';

const CountryReviews = ({ countryId }: Props) => {
	const country = useSelector((state) => countryByIdSelector(state, countryId));

	if (!country) {
		return null;
	}

	return <Root>Reviews</Root>;
};

export default CountryReviews;
