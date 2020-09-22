import { SEARCH_TYPES } from '../types';

const initialState = {
	search: null,
};

export const searchReducer = (state = initialState, action) => {
	if (action.type === SEARCH_TYPES.DO_SEARCH) {
		return { ...state, search: action.payload };
	}
	return state;
};
