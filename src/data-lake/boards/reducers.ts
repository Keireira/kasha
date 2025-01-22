import type { PayloadAction } from '@reduxjs/toolkit';
import type { BoardT, BoardsSliceT } from './boards.d';

import initialState from './initial-state';

export const setBoards = {
	reducer: (slice: BoardsSliceT, action: PayloadAction<BoardT[]>) => {
		const boards = action.payload;

		/*
		 * Reset state
		 */
		slice.byId = initialState.byId;
		slice.allIds = initialState.allIds;
		slice.categories = initialState.categories;
		slice.boardsByCategory = initialState.boardsByCategory;

		for (const board of boards) {
			slice.allIds.push(board.id);
			slice.byId[board.id] = board;

			slice.categories = [...new Set([...slice.categories, board.category])];

			if (!slice.boardsByCategory[board.category]) {
				slice.boardsByCategory[board.category] = [];
			}

			slice.boardsByCategory[board.category].push(board.id);
		}

		slice.cachedAt = Date.now();
	},
	prepare: (payload: BoardT[]) => ({ payload })
};

export const invalidateBoards = {
	reducer: (slice: BoardsSliceT) => {
		slice.cachedAt = initialState.cachedAt;
	},
	prepare: (payload: void) => ({ payload })
};
