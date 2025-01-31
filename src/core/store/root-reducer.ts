import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';

import API from '@api';

const persistConfig = {
	key: 'root',
	version: 1,
	storage: createIdbStorage({ name: 'kasha', storeName: 'keyval' }),
	whitelist: [],
	blacklist: [API.reducerPath]
};

const combinedReducer = combineReducers({
	[API.reducerPath]: API.reducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export default persistedReducer;
