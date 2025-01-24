export type FileT = {
	displayname: string;
	fullname: string;
	height: number;
	md5: string;
	name: string;
	path: string; // Link to the image. Add 2ch.hk
	size: number;
	thumbnail: string;
	tn_height: number;
	tn_width: number;
	type: number; // 1, 2, 3, 4 etc This is index of file type in array of file types of the board (start is 1)
	width: number;
};

export type PostT = {
	banned: 0 | 1;
	board: string; // board id (e.g. 'dev')
	closed: 0 | 1;
	comment: string;
	date: string; // Formatted date
	email: string;
	endless: 0 | 1;
	files: FileT[] | null;
	files_count: number;
	lasthit: number;
	name: string;
	num: number;
	op: 0 | 1;
	parent: number;
	posts_count: number;
	sticky: 0 | 1;
	subject: string;
	tags: string;
	timestamp: number;
	trip: string;
	views: number;
};

export type PostsSliceT = Record<string, Record<number, PostT>>;

// const posts = {
// 	b: {
// 		123: {}
// 	}
// };
