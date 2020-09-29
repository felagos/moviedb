/* istanbul ignore file */

import { SEARCH_TYPES } from '../types';

const initialState = {
	search: {
		page: 0,
		results: [],
	},
	query: "",
	type: ""
};

export const searchReducer = (state = initialState, action) => {
	if (action.type === SEARCH_TYPES.DO_SEARCH) {
		const { response, query, type } = action.payload;
		return { ...state, query, type, search: response };
	}
	if (action.type === SEARCH_TYPES.DO_SEARCH_MORE) {
		const { response, query, type } = action.payload;
		return { ...state, query, type, search: { ...response, results: [...state.search.results, ...response.results] } };
	}
	return state;
};
