import { GENRE_TYPES } from '../types';

const initialState = {
	genres: []
};

export const genreReducer = (state = initialState, action) => {

	if (action.type === GENRE_TYPES.LOAD) {
		return { ...state, genres: action.payload };
	}

	return state;
};
