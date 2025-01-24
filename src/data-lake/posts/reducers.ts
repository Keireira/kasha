import type { PayloadAction } from '@reduxjs/toolkit';
import type { PostT, PostsSliceT } from './posts.d';
import type { ThreadT } from '@data/threads';

type SetPostsT = {
	boardId: string;
	threads: ThreadT[];
};

export const setPosts = {
	reducer: (slice: PostsSliceT, action: PayloadAction<SetPostsT>) => {
		const { boardId, threads } = action.payload;
		const posts = threads.reduce((acc, thread) => {
			return acc.concat(thread.posts);
		}, [] as PostT[]);

		if (!slice[boardId]) {
			slice[boardId] = {};
		}

		slice[boardId] = posts.reduce(
			(acc, post) => ({
				...acc,
				[post.num]: post
			}),
			{} as Record<number, PostT>
		);
		return slice;
	},
	prepare: (payload: SetPostsT) => ({ payload })
};
