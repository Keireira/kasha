import React from 'react';

import calcLines from './calcLines';
import Root from './textarea.styles';

import type { Props } from './textarea.d';

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
	const { onChange, maxRows = 5, ...restProps } = props;

	const onChangeHd = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		calcLines(e, maxRows);

		if (typeof onChange === 'function') onChange(e);
	};

	return <Root ref={ref} {...restProps} onChange={onChangeHd} />;
});

export default Textarea;
