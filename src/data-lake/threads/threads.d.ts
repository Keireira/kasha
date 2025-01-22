import type { PostT } from '@data/posts';

export type ThreadT = {
	files_count: number;
	posts: PostT[];
	posts_count: number;
	thread_num: number;
};
