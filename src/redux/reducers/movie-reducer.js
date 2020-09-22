import { MOVIE_TYPES } from '../types';

const inititalState = {
	popular: [],
	upcoming: [],
	trending: [],
	active: null,
	keywords: [],
	recommendations: [],
	related: []
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

	if (action.type === MOVIE_TYPES.SET_ACTIVE) {
		return { ...state, active: action.payload };
	}

	if (action.type === MOVIE_TYPES.LOAD_RECCOMENDATIONS) {
		return { ...state, recommendations: action.payload };
	}

	if (action.type === MOVIE_TYPES.LOAD_KEYWORDS) {
		return { ...state, keywords: action.payload };
	}

	if (action.type === MOVIE_TYPES.LOAD_RELATED) {
		return { ...state, related: action.payload };
	}

	if (action.type === MOVIE_TYPES.CLEAN_ACTIVE) {
		return { ...state, related: [], recommendations: [], keywords: [], active: null };
	}

	return state;
};
