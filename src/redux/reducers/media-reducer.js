/* istanbul ignore file */

import { MEDIA_TYPES } from '../types';

const inititalState = {
	popular: [],
	upcoming: [],
	trending: [],
	active: null,
	keywords: [],
	recommendations: [],
	related: [],
	mediasTypes: {
		results: []
	}
};

export const mediaReducer = (state = inititalState, action) => {
	if (action.type === MEDIA_TYPES.LOAD_POPULAR) {
		return { ...state, popular: action.payload };
	}

	if (action.type === MEDIA_TYPES.LOAD_TRENDING) {
		return { ...state, trending: action.payload };
	}

	if (action.type === MEDIA_TYPES.LOAD_UPCOMING) {
		return { ...state, upcoming: action.payload };
	}

	if (action.type === MEDIA_TYPES.SET_ACTIVE) {
		return { ...state, active: action.payload };
	}

	if (action.type === MEDIA_TYPES.LOAD_RECCOMENDATIONS) {
		return { ...state, recommendations: action.payload };
	}

	if (action.type === MEDIA_TYPES.LOAD_KEYWORDS) {
		return { ...state, keywords: action.payload };
	}

	if (action.type === MEDIA_TYPES.LOAD_RELATED) {
		return { ...state, related: action.payload };
	}

	if (action.type === MEDIA_TYPES.CLEAN_ACTIVE) {
		return { ...state, related: [], recommendations: [], keywords: [], movies_types: { results: [] }, active: null };
	}

	if (action.type === MEDIA_TYPES.LOAD_MEDIA_BY_TYPE) {
		return { ...state, mediasTypes: action.payload };
	}

	if (action.type === MEDIA_TYPES.LOAD_MORE_MEDIA_BY_TYPE) {
		return { ...state, mediasTypes: { ...state.mediasTypes, results: [...state.mediasTypes.results, ...action.payload.results] } };
	}

	return state;
};
