import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';

import API from '@api';
import boardsReducer from '@data/boards';

const persistConfig = {
	key: 'root',
	version: 1,
	storage: createIdbStorage({ name: 'kasha', storeName: 'keyval' }),
	whitelist: ['boards'],
	blacklist: [API.reducerPath]
};

const combinedReducer = combineReducers({
	[API.reducerPath]: API.reducer,
	boards: boardsReducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export default persistedReducer;
