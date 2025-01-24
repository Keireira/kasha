import type { PostT } from '@data/posts';

export type ThreadT = {
	files_count: number;
	posts: PostT['num'][];
	posts_count: number;
	thread_num: number;
};

export type ThreadsSliceT = Record<
	string,
	{
		byId: Record<number, ThreadT>;
		allIds: number[];
	}
>;

// const threads = {
// 	'b': {
// 		byId: {
// 			123: {}
// 		},
// 		allIds: ['123']
// 	}
// };
