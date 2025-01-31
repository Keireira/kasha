import React from 'react';

import { Link } from '@tanstack/react-router';
import Root, { Flag, CountryName } from './country-card.styles';

import type { Props } from './country-card.d';

const CountryCard = ({ alpha_2, name, flag }: Props) => {
	return (
		<Root as={Link} to={`/countries/${alpha_2}`}>
			<Flag>{flag}</Flag> <CountryName>{name}</CountryName>
		</Root>
	);
};

export default CountryCard;
