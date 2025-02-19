import styled from 'styled-components';
import media from '@styles/media';

export const ShortTitle = styled.span``;

export const FullTitle = styled.span`
	display: none;

	${media.small} {
		display: unset;

		& + ${ShortTitle} {
			display: none;
		}
	}
`;

export const NavItem = styled.a`
	display: inline-flex;
	align-items: center;
	height: 100%;
	padding: 0 12px;
	color: var(--primary-text);
	font-weight: 500;
	font-size: 16px;
	text-decoration: none;
	border-bottom: 2px solid transparent;
	cursor: pointer;

	&.active {
		color: var(--accent);
		border-color: var(--accent);
		border-radius: 2px;
	}
`;

export const Navigation = styled.nav`
	display: flex;
	gap: 24px;
	height: 100%;
`;

export const Globe = styled.div`
	color: var(--accent);
	font-weight: 100;
	font-size: 36px;
`;

export const Heading = styled.h3`
	display: flex;
	gap: 12px;
	align-items: center;
	justify-content: flex-start;
	font-weight: 600;
	font-size: 18px;
	text-transform: uppercase;
`;

export const Header = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 64px;
	padding-right: 24px;
	padding-left: 24px;
	color: var(--primary-text);
	background-color: var(--bg-color-dark);

	${media.small} {
		padding-right: 48px;
		padding-left: 48px;
	}
`;

export const Main = styled.main`
	margin-top: 64px;
	padding-top: 24px;
	padding-right: 12px;
	padding-left: 12px;
	color: var(--primary-text);

	${media.small} {
		padding-top: 36px;
	}
`;
