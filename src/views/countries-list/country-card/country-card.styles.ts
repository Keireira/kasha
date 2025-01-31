import styled from 'styled-components';
import media from '@styles/media';

export const Flag = styled.p`
	font-size: 48px;
	transform: translateY(2px);
`;

export const CountryName = styled.h3`
	font-weight: 600;
	font-size: 18px;
`;

export default styled.div`
	display: flex;
	gap: 36px;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	padding: 32px;
	color: var(--primary-text);
	border: 1px solid var(--secondary-text);
	border-top: none;
	border-right: none;
	border-left: none;
	transition-timing-function: ease-in-out;
	transition-duration: 100ms;
	transition-property: color, background-color;

	&:hover,
	&:active,
	&:focus-visible {
		color: var(--accent);
		background-color: var(--bg-color-dark);
	}

	&:nth-last-child(-n + 1) {
		border-bottom: none;
	}

	${media.medium} {
		border-right: 1px solid var(--secondary-text);

		&:nth-child(2n) {
			border-right: none;
		}

		&:nth-last-child(-n + 2) {
			border-bottom: none;
		}

		&:last-child {
			border-right: none;
		}
	}

	${media.large} {
		border-right: 1px solid var(--secondary-text);

		&:nth-child(2n) {
			border-right: 1px solid var(--secondary-text);
		}

		&:nth-child(3n) {
			border-right: none;
		}

		&:nth-last-child(-n + 3) {
			border-bottom: none;
		}

		&:last-child {
			border-right: none;
		}
	}

	${media.xl} {
		border-right: 1px solid var(--secondary-text);

		&:nth-child(2n) {
			border-right: 1px solid var(--secondary-text);
		}

		&:nth-child(3n) {
			border-right: 1px solid var(--secondary-text);
		}

		&:nth-child(4n) {
			border-right: none;
		}

		&:nth-last-child(-n + 4) {
			border-bottom: none;
		}

		&:last-child {
			border-right: none;
		}
	}
`;
