import { getGenres } from '../api';
import { GENRE_TYPES } from '../types';

const _loadGenres = (genres) => ({ type: GENRE_TYPES.LOAD, payload: genres })

export const loadGenres = () => {
	return async (dispatch) => {
		const genres = await getGenres();
		dispatch(_loadGenres(genres));
	};
};
