import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@store';

import { useGetAllCountriesQuery } from '@data/countries/api';
import { actions as countriesActions } from '@data/countries';
import { filteredCountriesSelector } from '@data/countries/selectors';

import CountryCard from './country-card';
import SearchCountries from './search-countries';
import Root, { Countries, Empty } from './countries-list.styles';

import type { Props } from './countries-list.d';

const CountriesList = (_props: Props) => {
	const dispatch = useAppDispatch();
	const result = useGetAllCountriesQuery();
	const filteredCountries = useSelector(filteredCountriesSelector);

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(countriesActions.updateCountries(result.data));
	}, [result.isSuccess, result.isFetching]);

	return (
		<Root>
			<SearchCountries />

			<Countries>
				{filteredCountries.map((country) => (
					<CountryCard key={country.alpha_2} {...country} />
				))}
			</Countries>

			{!filteredCountries.length && <Empty>No countries found</Empty>}
		</Root>
	);
};

export default CountriesList;
