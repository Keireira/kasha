import type { PayloadAction } from '@reduxjs/toolkit';
import type { BoardT, BoardsSliceT } from './boards.d';

export const setBoards = {
	reducer: (slice: BoardsSliceT, action: PayloadAction<BoardT[]>) => {
		const boards = action.payload;

		for (const board of boards) {
			slice.allIds.push(board.id);
			slice.byId[board.id] = board;
		}

		slice.cachedAt = Date.now();
	},
	prepare: (payload: BoardT[]) => ({ payload })
};

export const invalidateBoards = {
	reducer: (slice: BoardsSliceT) => {
		slice.cachedAt = 0;
	},
	prepare: (payload: void) => ({ payload })
};
