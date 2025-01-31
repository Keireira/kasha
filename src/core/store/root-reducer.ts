import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';

import API from '@api';
import countriesReducer from '@data/countries';

const persistConfig = {
	key: 'root',
	version: 1,
	storage: createIdbStorage({ name: 'kasha', storeName: 'keyval' }),
	whitelist: ['countries'],
	blacklist: [API.reducerPath]
};

const combinedReducer = combineReducers({
	[API.reducerPath]: API.reducer,
	countries: countriesReducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export default persistedReducer;
