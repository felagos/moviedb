import { doSearch } from '../../api';
import { SEARCH_TYPES } from '../types';

export const loadSearch = (query, page = 1) => {
	return async (dispatch) => {
		const response = await doSearch(query, page);
		dispatch({ type: SEARCH_TYPES.DO_SEARCH, payload: response });
	}
}
