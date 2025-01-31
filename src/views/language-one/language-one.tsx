import React from 'react';

import Root from './language-one.styles';

import type { Props } from './language-one.d';

const LanguageOne = ({ language }: Props) => {
	return <Root>Language {language} Component</Root>;
};

export default LanguageOne;
