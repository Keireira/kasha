import type { BoardT } from '@data/boards';
import type { ThreadT } from '@data/threads';

/*
 * Get list of threads of the board
 */
export type GetThreadsResT = {
	advert_bottom_image: string;
	advert_bottom_link: string;
	advert_mobile_image: string;
	advert_mobile_link: string;
	board_banner_image: string;
	board_banner_link: string; // board id (e.g. 'b')
	board_speed: number;
	current_page: number;
	current_thread: number;
	is_board: boolean;
	is_index: boolean;
	pages: number[];

	board: BoardT;
	threads: ThreadT[];
};
export type GetThreadsReqT = {
	boardId: BoardT['id'];
	page: number | 'index';
};

/*
 * Get catalog (all threads) of threads of the board
 */
export type GetThreadsCatalogResT = {
	advert_bottom_image: string;
	advert_bottom_link: string;
	advert_mobile_image: string;
	advert_mobile_link: string;
	board_banner_image: string;
	board_banner_link: string; // board id (e.g. 'b')
	board_speed: number;
	current_page: number;
	current_thread: number;
	is_board: boolean;
	is_index: boolean;
	pages: number[];
	filter: 'standart';

	board: BoardT;
	threads: ThreadT[];
};
export type GetThreadsCatalogReqT = {
	boardId: BoardT['id'];
	sort: 'bump' | 'order';
};

/*
 * Get full thread by ID
 */
export type GetFullThreadResT = {
	advert_bottom_image: string;
	advert_bottom_link: string;
	advert_mobile_image: string;
	advert_mobile_link: string;
	board_banner_image: string;
	board_banner_link: string;
	current_thread: number;
	files_count: number;
	is_board: boolean;
	is_closed: 0 | 1;
	is_index: boolean;
	max_num: number;
	posts_count: number;
	thread_first_image: string;
	title: string;
	unique_posters: number;

	board: BoardT;
	threads: ThreadT[];
};
export type GetFullThreadReqT = {
	boardId: BoardT['id'];
	threadId: ThreadT['id'];
};
