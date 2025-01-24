import type { PayloadAction } from '@reduxjs/toolkit';
import type { BoardT, BoardsSliceT } from './boards.d';

export const setBoards = {
	reducer: (slice: BoardsSliceT, action: PayloadAction<BoardT[]>) => {
		const boards = action.payload;

		const newSlice = {
			byId: {} as BoardsSliceT['byId'],
			allIds: [] as BoardsSliceT['allIds'],
			categories: [] as BoardsSliceT['categories'],
			boardsByCategory: {} as BoardsSliceT['boardsByCategory'],
			favorites: slice.favorites as BoardsSliceT['favorites'],
			cachedAt: Date.now() as BoardsSliceT['cachedAt']
		};

		for (const board of boards) {
			newSlice.allIds.push(board.id);
			newSlice.byId[board.id] = board;

			if (!newSlice.categories.includes(board.category)) {
				newSlice.categories.push(board.category);
			}

			if (!newSlice.boardsByCategory[board.category]) {
				newSlice.boardsByCategory[board.category] = [];
			}

			newSlice.boardsByCategory[board.category].push(board.id);
		}

		return newSlice;
	},
	prepare: (payload: BoardT[]) => ({ payload })
};

export const addBoard = {
	reducer: (slice: BoardsSliceT, action: PayloadAction<BoardT>) => {
		const board = action.payload;

		slice.allIds = [...new Set([...slice.allIds, board.id])];
		slice.byId[board.id] = board;

		if (!slice.categories.includes(board.category)) {
			slice.categories.push(board.category);
		}

		if (!slice.boardsByCategory[board.category]) {
			slice.boardsByCategory[board.category] = [];
		}

		slice.boardsByCategory[board.category].push(board.id);

		return slice;
	},
	prepare: (payload: BoardT) => ({ payload })
};
