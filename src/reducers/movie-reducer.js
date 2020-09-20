import { MOVIE_TYPES } from '../types';

const inititalState = {
	popular: [],
	upcoming: [],
	trending: []
};

export const movieReducer = (state = inititalState, action) => {
	if (action.type === MOVIE_TYPES.LOAD_POPULAR) {
		return { ...state, popular: action.payload };
	}

	if (action.type === MOVIE_TYPES.LOAD_TRENDING) {
		return { ...state, trending: action.payload };
	}

	if (action.type === MOVIE_TYPES.LOAD_UPCOMING) {
		return { ...state, upcoming: action.payload };
	}

	return state;
};
