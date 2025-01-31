import { createFileRoute } from '@tanstack/react-router';

import CountriesListView from '@views/countries-list';

export const Route = createFileRoute('/countries/')({
	component: CountriesListView
});
