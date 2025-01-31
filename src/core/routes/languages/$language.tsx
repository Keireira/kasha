import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import LanguageOneView from '@views/language-one';

const TargetComponent = () => {
	const { language } = Route.useParams();

	return <LanguageOneView language={language} />;
};

export const Route = createFileRoute('/languages/$language')({
	component: TargetComponent
});
