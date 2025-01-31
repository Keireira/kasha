import styled from 'styled-components';
import media from '@styles/media';

export const Empty = styled.div`
	width: fit-content;
	padding: 12px 4px;
	color: var(--primary-text);
	font-size: 24px;
	place-self: center;
`;

export const Countries = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	width: 100%;
	margin: 0 auto;
	padding: 20px;

	${media.medium} {
		grid-template-columns: repeat(2, 1fr);
	}

	${media.large} {
		grid-template-columns: repeat(3, 1fr);
	}

	${media.xl} {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 24px;

	${media.small} {
		gap: 48px;
	}
`;
