import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';

import API from '@api';
import boardsReducer from '@data/boards';
import threadsReducer from '@data/threads';
import postsReducer from '@data/posts';

const persistConfig = {
	key: 'root',
	version: 1,
	storage: createIdbStorage({ name: 'kasha', storeName: 'keyval' }),
	whitelist: ['boards'],
	blacklist: [API.reducerPath, 'threads', 'posts']
};

const combinedReducer = combineReducers({
	[API.reducerPath]: API.reducer,
	boards: boardsReducer,
	threads: threadsReducer,
	posts: postsReducer
});

const rootReducer = (state, action) => {
	if (action.type === 'RESET') {
		state = {};
	}

	return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
