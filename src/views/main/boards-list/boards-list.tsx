import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@tanstack/react-router';

import { favoriteBoardsSelector, boardsByCategorySelector } from '@data/boards/selectors';

import { H2 } from '@ui';
import Root, { CategoryTitle, Category, BoardsUl, BoardLi } from './boards-list.styles';

import type { Props } from './boards-list.d';

/*
 * @TODO:
 *
 * 1. Add a skeleton loader
 * 2. Move items to BoardItem component
 * 3. Add a search input
 * 4. Hide/Expand categories by tap
 * 5. Sort boards by alphabet
 * 6. Move "пользовательские" category to the bottom
 * 7. Hide hidden boards
 * 8. Add input to enter board id and go to it
 * 9. Add a button to add a board to favorites
 * 10. Add a button to unfavor a board
 */

const BoardsList = ({ isFetching }: Props) => {
	const favoriteBoards = useSelector(favoriteBoardsSelector);
	const boardsByCategory = useSelector(boardsByCategorySelector);

	return (
		<Root>
			{favoriteBoards.length > 0 && (
				<Category>
					<CategoryTitle as={H2}>Избранные доски</CategoryTitle>

					<BoardsUl>
						{favoriteBoards.map((board) => (
							<Link to={board.id} key={board.id}>
								<BoardLi>
									{board.name}&nbsp;<b>/{board.id}/</b>
								</BoardLi>
							</Link>
						))}
					</BoardsUl>
				</Category>
			)}

			{Object.entries(boardsByCategory).map(([category, boards]) => (
				<Category key={category}>
					<CategoryTitle as={H2}>{category || 'Скрытые'}</CategoryTitle>

					<BoardsUl>
						{boards.map((board) => (
							<BoardLi as={Link} key={board.id} to={board.id}>
								{board.name}&nbsp;<b>/{board.id}/</b>
							</BoardLi>
						))}
					</BoardsUl>
				</Category>
			))}
		</Root>
	);
};

export default BoardsList;
