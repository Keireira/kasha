export type BoardT = {
	bump_limit: number;

	/*
	 * Board could not have a category — this is so called 'hidden' board,
	 * which does not shown in the list of boards on the main page
	 * EXAMPLES: /dev/, /test/, /rf/
	 */
	category: string;
	default_name: string;
	enable_dices: boolean;
	enable_flags: boolean;
	enable_icons: boolean;
	enable_likes: boolean;
	enable_names: boolean;
	enable_oekaki: boolean;

	/*
	 * If `enable_posting` is `false`, then the board is read-only (archived)
	 */
	enable_posting: boolean;
	enable_sage: boolean;
	enable_shield: boolean;
	enable_subject: boolean;
	enable_thread_tags: boolean;
	enable_trips: boolean;
	file_types: string[];
	id: string;
	info: string;
	info_outer: string;
	max_comment: number;
	max_files_size: number;
	max_pages: number;
	name: string;
	tags: string[];
	threads_per_page: number;
};

export type BoardsSliceT = {
	byId: Record<string, BoardT>;
	allIds: string[];
	cachedAt: number;
	categories: string[];
	boardsByCategory: Record<string, string[]>;
};
