import React, { useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';

import { actions as threadActs } from '@data/threads';
import { useGetBoardThreadsQuery } from '@data/threads/api';
import { threadByIdSelector, threadsByBoardSelector } from '@data/threads/selectors';

import { actions as postsActs } from '@data/posts';
import { postByIdSelector } from '@data/posts/selectors';

import { actions as bordersActs } from '@data/boards';

import Root from './board.styles';
import type { Props } from './board.d';

const Post = ({ boardId, postId }) => {
	// @todo: limit by 4
	const post = useSelector((state) => postByIdSelector(state, boardId, postId));

	return <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.comment) }} />;
};

const Thread = ({ boardId, threadId }) => {
	const thread = useSelector((state) => threadByIdSelector(state, boardId, threadId));

	console.log('thread:', thread);
	return (
		<div>
			{threadId}{' '}
			{thread.posts && (
				<div>
					{thread.posts.map((postId) => {
						return (
							<Post key={postId} boardId={boardId} postId={postId}>
								{postId}
							</Post>
						);
					})}
				</div>
			)}
			<br />
			<hr />
			<br />
		</div>
	);
};

const Board = ({ boardId }: Props) => {
	const dispatch = useAppDispatch();
	const [page, setPage] = useState(0);
	const maxPage = 10; // use data from 'board'
	const result = useGetBoardThreadsQuery({ boardId, page });
	const threads = useSelector((state) => threadsByBoardSelector(state, boardId));
	// const posts = useSelector((state) => postsSelector(state, boardId, postIds));

	// console.log(threads);

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(bordersActs.addBoard(result.data.board));

		dispatch(
			threadActs.setThreads({
				boardId,
				threads: result.data.threads
			})
		);

		dispatch(postsActs.setPosts({ boardId, threads: result.data.threads }));
	}, [result.isSuccess, result.isFetching]);

	return (
		<Root>
			{boardId}
			<div>Аноним</div>
			<div>23/01/25 Чтв 15:16:25</div>

			{threads &&
				threads.allIds.map((threadId) => {
					return <Thread key={threadId} threadId={threadId} boardId={boardId} />;
				})}
		</Root>
	);
};

export default Board;
