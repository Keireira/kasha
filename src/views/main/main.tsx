import React from 'react';
import { Outlet, Link } from '@tanstack/react-router';

import { Header, Main, Globe, Heading, Navigation, NavItem, FullTitle, ShortTitle } from './main.styles';

const MainView = () => (
	<>
		<Header>
			<Heading>
				<Globe>🌐︎</Globe> <FullTitle>Whatever country</FullTitle> <ShortTitle>WC</ShortTitle>
			</Heading>

			<Navigation>
				<NavItem as={Link} to="/countries" activeProps={{ className: 'active' }}>
					Countries
				</NavItem>
			</Navigation>
		</Header>

		<Main>
			<Outlet />
		</Main>
	</>
);

export default MainView;
