import { createFileRoute } from '@tanstack/react-router';

import LanguagesListView from '@views/languages-list';

export const Route = createFileRoute('/languages/')({
	component: LanguagesListView
});
