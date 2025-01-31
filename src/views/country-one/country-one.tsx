import React from 'react';

import Root from './country-one.styles';

import type { Props } from './country-one.d';

const CountryOne = ({ country }: Props) => {
	return <Root>Country {country} Component</Root>;
};

export default CountryOne;
