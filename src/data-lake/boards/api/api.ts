import API from '@api';

import type { GetBoardsReqT, GetBoardsResT } from './api.d';

const boardsApi = API.injectEndpoints({
	endpoints: (build) => ({
		/*
		 * Get list of available boards
		 */
		getAllBoards: build.query<GetBoardsResT, GetBoardsReqT>({
			query: () => ({
				url: '/rmt/api/mobile/v2/boards',
				method: 'GET'
			}),
			providesTags: ['boards']
		})
	})
});

export default boardsApi;
