import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import ThreadView from '@views/thread';

type SearchParams = {
	postId: number;
};

const RouteComponent = () => {
	const { postId } = Route.useSearch();
	const { boardId, threadId } = Route.useParams();

	return <ThreadView boardId={boardId} threadId={threadId} postId={postId} />;
};

export const Route = createFileRoute('/_board/$boardId/$threadId')({
	component: RouteComponent,
	validateSearch: (search: SearchParams) => search
});
