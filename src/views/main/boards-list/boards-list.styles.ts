import styled from 'styled-components';

export const BoardLi = styled.li`
	display: flex;
	width: fit-content;
	padding: 16px 24px;
	color: #f60;
	background-color: #ddd;
	border-radius: 4px;
`;

export const BoardsUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const Category = styled.div`
	& + & {
		margin-top: 32px;
	}
`;

export const CategoryTitle = styled.h2`
	margin-bottom: 16px;
`;

export default styled.div`
	/* stylelint-disable declaration-block-no-redundant-longhand-properties */

	padding-top: calc(env(safe-area-inset-top) + 24px);
	padding-right: calc(env(safe-area-inset-right) + 24px);
	padding-bottom: calc(env(safe-area-inset-bottom) + 24px);
	padding-left: calc(env(safe-area-inset-left) + 24px);
`;
