import { createSelector } from '@reduxjs/toolkit';

import type { ThreadsSliceT } from './threads.d';

export const threadsSelector = createSelector([(store) => store.threads], (threads: ThreadsSliceT) => threads);

export const threadsByBoardSelector = createSelector(
	[threadsSelector, (_state: unknown, boardId: string) => boardId],
	(threads, boardId) => threads[boardId]
);

export const threadByIdSelector = createSelector(
	[
		threadsSelector,
		(_state: unknown, boardId: string, threadId: number) => {
			return {
				boardId,
				threadId
			};
		}
	],
	(threads, { boardId, threadId }) => {
		const boardThreads = threads[boardId] || {};

		return boardThreads.byId[threadId] || [];
	}
);
