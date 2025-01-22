import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import BoardView from '@views/board';

const RouteComponent = () => {
	const { boardId } = Route.useParams();

	return <BoardView boardId={boardId} />;
};

export const Route = createFileRoute('/_board/$boardId/')({
	component: RouteComponent
});
