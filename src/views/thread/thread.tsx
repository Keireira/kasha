import React from 'react';

import Root from './thread.styles';
import type { Props } from './thread.d';

const Thread = ({ threadId }: Props) => {
	return (
		<Root>
			<div style={{ height: '200vh', width: '100vw', background: 'lightblue' }}>
				This is component to view {threadId} thread at some board
			</div>

			<div id="5960228" style={{ height: '50vh', width: '100vw', background: 'lightcoral' }}>
				#5960228
			</div>

			<div id="5960229" style={{ height: '50vh', width: '100vw', background: 'lightgreen' }}>
				#5960229
			</div>

			<div style={{ height: '50vh', width: '100vw', background: 'red' }}>Footer</div>
		</Root>
	);
};

export default Thread;
