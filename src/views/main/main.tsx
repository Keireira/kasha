import React, { useEffect } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';

import { actions as bordersActs } from '@data/boards';
import { isInvalidSelector } from '@data/boards/selectors';
import boardsApi, { useGetAllBoardsQuery } from '@data/boards/api';

import Root from './main.styles';
import BoardsList from './boards-list';

import type { Props } from './main.d';

/*
 * @TODO:
 *
 * 1. Add forced refresh by pulling the top of the page
 */

const Main = (_props: Props) => {
	const dispatch = useAppDispatch();
	/*
	 * "Invalid" means there is no data in the store about boards, or the data is outdated
	 */
	const isInvalid = useSelector(isInvalidSelector);
	const result = useGetAllBoardsQuery(undefined, {
		skip: !isInvalid
	});

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;
		dispatch(bordersActs.setBoards(result.data));
	}, [result.isSuccess, result.isFetching]);

	const forcedRefetch = () => {
		/*
		 * If "skip: false", we can refetch by invalidating the tags
		 * If "skip: true", we can't refetch by invalidating the tags, we have to initialize the query
		 */
		if (isInvalid) {
			dispatch(boardsApi.util.invalidateTags(['boards']));
		} else {
			dispatch(
				boardsApi.endpoints.getAllBoards.initiate(undefined, {
					subscribe: false,
					forceRefetch: true
				})
			);
		}
	};

	return (
		<Root onClick={forcedRefetch}>
			<BoardsList isFetching={result.isFetching} />
		</Root>
	);
};

export default Main;
