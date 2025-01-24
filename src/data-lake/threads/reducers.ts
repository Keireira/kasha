import type { PayloadAction } from '@reduxjs/toolkit';
import type { ThreadT, ThreadsSliceT } from './threads.d';

type SetThreadsT = {
	boardId: string;
	threads: ThreadT[];
};

export const setThreads = {
	reducer: (slice: ThreadsSliceT, action: PayloadAction<SetThreadsT>) => {
		const { boardId, threads } = action.payload;

		console.log(boardId, threads);

		if (!slice[boardId]) {
			slice[boardId] = { byId: {}, allIds: [] };
		}

		slice[boardId].byId = threads.reduce(
			(acc, thread) => {
				slice[boardId].allIds.push(thread.thread_num);

				return {
					...acc,
					[thread.thread_num]: {
						...thread,
						posts: thread.posts.map((post) => post.num)
					}
				};
			},
			{} as Record<string, ThreadT>
		);

		return slice;
	},
	prepare: (payload: SetThreadsT) => ({ payload })
};
