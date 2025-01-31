import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@tanstack/react-router';

import { countryByIdSelector } from '@data/countries/selectors';

import Root, { Header, Name, Slogan, Main, Tabs, Tab } from './country-one.styles';

import type { Props } from './country-one.d';

const TABS = [
	{ id: 'about', label: 'About' },
	{ id: 'stats', label: 'Stats' },
	{ id: 'ratings', label: 'Ratings' }
];

const CountryOne = ({ countryId }: Props) => {
	const country = useSelector((state) => countryByIdSelector(state, countryId));

	if (!country) {
		return null;
	}

	return (
		<Root>
			<Header>
				<Name>{country.name}</Name>
				<Slogan>{country.slogan || 'Check opinion about that country!'}</Slogan>
			</Header>

			<Main>
				<Tabs>
					{TABS.map((tab) => (
						<Tab
							as={Link}
							key={tab.id}
							to={`/countries/${countryId}`}
							search={{ view: tab.id }}
							activeProps={{ className: 'active' }}
						>
							{tab.label}
						</Tab>
					))}
				</Tabs>
			</Main>
		</Root>
	);
};

export default CountryOne;
