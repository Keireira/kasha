import React, { useId } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';

import { searchSelector } from '@data/countries/selectors';
import { actions as countriesActions } from '@data/countries';

import Root, { SearchField, Input, Label } from './search-countries.styles';
import { SearchField as AriaSearchField, Input as AriaInput } from 'react-aria-components';

const CountriesList = () => {
	const id = useId();
	const dispatch = useAppDispatch();
	const searchQuery = useSelector(searchSelector);

	const onInputHd = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(countriesActions.updateSearch(e.target.value));
	};

	return (
		<Root>
			<SearchField as={AriaSearchField}>
				<Input as={AriaInput} id={id} placeholder="Antigua and Barbuda" onInput={onInputHd} value={searchQuery} />

				<Label htmlFor={id}>Search</Label>
			</SearchField>
		</Root>
	);
};

export default CountriesList;
