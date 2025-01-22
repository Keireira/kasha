import type { BoardsSliceT } from './boards';

const initialState: BoardsSliceT = {
	byId: {},
	allIds: [],
	cachedAt: 0
};

export default initialState;
