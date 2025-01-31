import React from 'react';
import { useSelector } from 'react-redux';

import { countryByIdSelector } from '@data/countries/selectors';

import { Textarea, Button } from '@ui';
import Root from './reviews.styles';

import type { Props } from './reviews.d';

const CountryReviews = ({ countryId }: Props) => {
	const country = useSelector((state) => countryByIdSelector(state, countryId));

	if (!country) {
		return null;
	}

	return (
		<Root>
			<h1>Write your review</h1>
			<hr />
			<Textarea maxRows={10} />
			<hr />
			<Button>Send</Button>
		</Root>
	);
};

export default CountryReviews;
