import { createSelector } from '@reduxjs/toolkit';

import type { BoardT, BoardsSliceT } from './boards';

export const boardsSelector = createSelector([(store) => store.boards], (boards: BoardsSliceT) => boards);

export const allBoardsSelector = createSelector([boardsSelector], (boards) => {
	return boards.allIds.map((id) => boards.byId[id]);
});

export const boardsByCategorySelector = createSelector([boardsSelector], (boards) => {
	const result: Record<string, BoardT[]> = {};

	boards.allIds.forEach((id) => {
		const board = boards.byId[id];

		if (!result[board.category]) {
			result[board.category] = [];
		}

		result[board.category].push(board);
	});

	return result;
});

const QUARTER_DAY = 6 * 60 * 60 * 1000;
export const isInvalidSelector = createSelector([boardsSelector], (boards) => {
	if (!boards.allIds.length) return true;

	return Date.now() - boards.cachedAt > QUARTER_DAY;
});

export const boardSelector = createSelector(
	[boardsSelector, (_, boardId: BoardT['id']) => boardId],
	(boards, boardId) => boards.byId[boardId]
);

export const favoriteBoardsSelector = createSelector([boardsSelector], (boards) => {
	return boards.favorites.map((id) => boards.byId[id]);
});
