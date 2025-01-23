import type { BoardsSliceT } from './boards';

const initialState: BoardsSliceT = {
	byId: {},
	allIds: [],
	cachedAt: 0,
	categories: [],
	boardsByCategory: {},
	favorites: []
};

export default initialState;
