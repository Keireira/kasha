import styled from 'styled-components';
import media from '@styles/media';

export const Info = styled.div`
	width: 60vw;
	padding: 36px 24px;
	color: var(--white);
	font-weight: 500;
	font-size: 18px;
	background-color: var(--bg-color-dark);
	border-radius: 16px;
	box-shadow: 0 0 6px -3px var(--accent);
	cursor: pointer;
`;

export const Tab = styled.div`
	width: fit-content;
	padding: 14px 18px;
	color: var(--white);
	font-weight: 500;
	font-size: 18px;
	background-color: var(--bg-color-dark);
	border-radius: 16px;
	box-shadow: 0 0 6px -3px var(--accent);
	cursor: pointer;

	&.active {
		background-color: var(--accent);
	}
`;

export const Tabs = styled.div`
	display: grid;
	grid-auto-columns: min-content;
	grid-auto-flow: column;
	gap: 18px;
`;

export const Name = styled.h1`
	color: var(--white);
	font-weight: 700;
	font-size: 42px;
`;

export const Slogan = styled.h3`
	color: var(--primary-text);
	font-weight: 400;
	font-size: 18px;
`;

export const Header = styled.hgroup`
	display: grid;
	grid-auto-flow: row;
	gap: 24px;
	justify-content: start;
`;

export const Main = styled.article`
	display: grid;
	grid-auto-flow: row;
	gap: 24px;
`;

export default styled.section`
	display: grid;
	grid-auto-flow: row;
	gap: 48px;
	justify-content: start;
	padding-right: 24px;
	padding-left: 24px;

	${media.small} {
		padding-right: 48px;
		padding-left: 48px;
	}
`;
