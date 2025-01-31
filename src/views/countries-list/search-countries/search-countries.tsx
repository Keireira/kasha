import React, { useId } from 'react';
import { SearchField as AriaSearchField, Input as AriaInput } from 'react-aria-components';

import Root, { SearchField, Input, Label } from './search-countries.styles';

const CountriesList = () => {
	const id = useId();

	return (
		<Root>
			<SearchField as={AriaSearchField}>
				<Input as={AriaInput} id={id} placeholder="Antigua and Barbuda" />

				<Label htmlFor={id}>Search</Label>
			</SearchField>
		</Root>
	);
};

export default CountriesList;
