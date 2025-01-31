import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import CountryOneView from '@views/country-one';

type SearchParams = {
	view?: 'about' | 'stats' | 'ratings';
};

const TargetComponent = () => {
	const { view } = Route.useSearch();
	const { country } = Route.useParams();

	return <CountryOneView countryId={country} view={view} />;
};

export const Route = createFileRoute('/countries/$country')({
	component: TargetComponent,
	validateSearch: (search: SearchParams) => {
		if (!('view' in search)) {
			search.view = 'about';
		}

		return search;
	}
});
