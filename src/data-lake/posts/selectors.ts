import { createSelector } from '@reduxjs/toolkit';

import type { PostsSliceT } from './posts.d';

export const postsSelector = createSelector([(store) => store.posts], (posts: PostsSliceT) => posts);

export const postByIdSelector = createSelector(
	[
		postsSelector,
		(_state: unknown, boardId: string, postId: number) => {
			return {
				boardId,
				postId
			};
		}
	],
	(posts, { boardId, postId }) => {
		const boardPosts = posts[boardId] || {};

		return boardPosts[postId] || {};
	}
);
