import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from '@tanstack/react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import ProgressiveUnit from '@shared/pwa';
import { FontStyles, ResetStyles, GeneralStyles } from '@core/styles';

import type { AppRouter } from '@src/index.tsx';

import store from './store';
const persistor = persistStore(store);

type Props = {
	router: AppRouter;
};

const Root = ({ router }: Props) => {
	return (
		<>
			<ResetStyles />
			<FontStyles />
			<GeneralStyles />

			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<RouterProvider router={router} />

					<ProgressiveUnit />
				</PersistGate>
			</Provider>
		</>
	);
};

export default Root;
