import React, { useEffect } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';
import { Link } from '@tanstack/react-router';

import { useGetCountryQuery } from '@data/countries/api';
import { actions as countriesActions } from '@data/countries';
import { countryByIdSelector } from '@data/countries/selectors';

import About from './about';
import Stats from './stats';
import Reviews from './reviews';
import Comments from '@shared/comments';
import Root, { Header, Name, Slogan, Main, Tabs, Tab, Info } from './country-one.styles';

import type { Props } from './country-one.d';

type TabView = 'about' | 'stats' | 'reviews';

const TABS = [
	{ id: 'about' as TabView, label: 'About' },
	{ id: 'stats' as TabView, label: 'Stats' },
	{ id: 'reviews' as TabView, label: 'Reviews' }
] as const;

const CountryOne = ({ view, countryId }: Props) => {
	const dispatch = useAppDispatch();
	const result = useGetCountryQuery({ countryId });
	const country = useSelector((state) => countryByIdSelector(state, countryId));

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(countriesActions.setCountry(result.data));
	}, [result.isSuccess, result.isFetching]);

	if (!country) {
		return null;
	}

	return (
		<Root>
			<Header>
				<Name>
					{country.flag}&nbsp;{country.name}
				</Name>
				<Slogan>{country.slogan || 'Check opinion about that country!'}</Slogan>
			</Header>

			<Main>
				<Tabs>
					{TABS.map((tab) => (
						// @ts-ignore
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

				<Info>
					{view === 'about' && <About countryId={countryId} />}
					{view === 'stats' && <Stats countryId={countryId} />}
					{view === 'reviews' && <Reviews countryId={countryId} />}
				</Info>

				{view === 'reviews' && <Comments />}
			</Main>
		</Root>
	);
};

export default CountryOne;
