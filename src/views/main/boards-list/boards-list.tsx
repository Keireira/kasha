import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@tanstack/react-router';

import { favoriteBoardsSelector, boardsByCategorySelector } from '@data/boards/selectors';

import { H2 } from '@ui';
import Root, { CategoryTitle, Category, BoardsSection, BoardLink } from './boards-list.styles';

import type { Props } from './boards-list.d';

const BoardsList = ({ isFetching }: Props) => {
	const favoriteBoards = useSelector(favoriteBoardsSelector);
	const boardsByCategory = useSelector(boardsByCategorySelector);

	console.log(boardsByCategory);

	return (
		<Root>
			{favoriteBoards.length > 0 && (
				<Category>
					<CategoryTitle as={H2}>Избранные доски</CategoryTitle>

					<BoardsSection>
						{favoriteBoards.map((board) => (
							<BoardLink as={Link} key={board.id} to={board.id}>
								{board.name}&nbsp;<b>/{board.id}/</b>
							</BoardLink>
						))}
					</BoardsSection>
				</Category>
			)}

			{Object.entries(boardsByCategory).map(([category, boards]) => {
				return (
					<Category key={category}>
						<CategoryTitle as={H2}>{category || 'Скрытые'}</CategoryTitle>

						<BoardsSection>
							{boards.map((board) => (
								<BoardLink as={Link} key={board.id} to={board.id}>
									{board.name}&nbsp;<b>/{board.id}/</b>
								</BoardLink>
							))}
						</BoardsSection>
					</Category>
				);
			})}
		</Root>
	);
};

export default BoardsList;
