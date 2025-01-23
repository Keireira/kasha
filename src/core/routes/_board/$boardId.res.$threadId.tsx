import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import ThreadView from '@views/thread';

const RouteComponent = () => {
	const { boardId, threadId } = Route.useParams();

	return <ThreadView boardId={boardId} threadId={threadId} />;
};

export const Route = createFileRoute('/_board/$boardId/res/$threadId')({
	component: RouteComponent
});
