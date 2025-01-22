import React from 'react';

import Root from './board.styles';
import type { Props } from './board.d';

const Board = ({ boardId }: Props) => {
	return <Root>Zero page of /{boardId}/ board</Root>;
};

export default Board;
