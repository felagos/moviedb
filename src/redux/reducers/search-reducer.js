import { SEARCH_TYPES } from '../types';

const initialState = {
	search: {
		results: []
	},
};

export const searchReducer = (state = initialState, action) => {
	if (action.type === SEARCH_TYPES.DO_SEARCH) {
		return { ...state, search: {...action.payload, results: [...state.search.results, ...action.payload.results]} };
	}
	return state;
};
