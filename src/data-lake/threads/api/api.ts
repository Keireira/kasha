import API from '@api';

import type {
	GetThreadsReqT,
	GetThreadsResT,
	GetThreadsCatalogResT,
	GetThreadsCatalogReqT,
	GetFullThreadResT,
	GetFullThreadReqT
} from './api.d';

const boardsApi = API.injectEndpoints({
	endpoints: (build) => ({
		/*
		 * Get list of threads of the board
		 */
		getBoardThreads: build.query<GetThreadsResT, GetThreadsReqT>({
			query: ({ boardId, page }) => ({
				url: `/${boardId}/${page > 0 ? page : 'index'}.json`,
				method: 'GET'
			})
		}),

		/*
		 * Get catalog (all threads) of threads of the board
		 */
		getThreadsCatalog: build.query<GetThreadsCatalogResT, GetThreadsCatalogReqT>({
			query: ({ boardId, sort = 'bump' }) => ({
				url: sort === 'bump' ? `/${boardId}/catalog.json` : `/${boardId}/catalog_num.json`,
				method: 'GET'
			})
		}),

		/*
		 * Get full thread by ID
		 */
		getFullThread: build.query<GetFullThreadResT, GetFullThreadReqT>({
			query: ({ boardId, threadId }) => ({
				url: `/${boardId}/res/${threadId}.json`,
				method: 'GET'
			})
		})
	})
});

export default boardsApi;
