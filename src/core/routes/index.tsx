import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	beforeLoad: () => {
		throw redirect({ to: '/countries' });
	},
	component: Outlet
});
