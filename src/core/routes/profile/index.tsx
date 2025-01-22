import { createFileRoute } from '@tanstack/react-router';

import ProfileView from '@views/profile';

export const Route = createFileRoute('/profile/')({
	component: ProfileView
});
