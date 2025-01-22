import * as React from 'react';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />

			{/* {import.meta.env.DEV && <TanStackRouterDevtools initialIsOpen={false} position="top-right" />} */}
		</>
	)
});
