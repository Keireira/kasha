import styled from 'styled-components';
import media from '@styles/media';

export const Input = styled.input`
	width: 100%;
	padding: 12px 4px;
	color: var(--primary-text);
	font-size: 24px;
	background-color: transparent;
	border: none;
	border-bottom: 2px solid var(--accent);

	&:focus-visible {
		box-shadow: none;
	}
`;

export const Label = styled.label`
	position: absolute;
	top: calc(100% + 4px);
	left: 4px;
	font-variant-caps: all-small-caps;
	color: var(--primary-text);
	font-weight: 600;
	font-size: 18px;
`;

export const SearchField = styled.div`
	position: relative;
	width: 85vw;

	${media.small} {
		width: 60vw;
	}
`;

export default styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;
