import React from 'react';

import Root from './thread.styles';
import type { Props } from './thread.d';

const Thread = ({ threadId, postId }: Props) => {
	return <Root>This is component to view {threadId} thread at some board</Root>;
};

export default Thread;
