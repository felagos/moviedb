import { doSearch, doSearchMovie, doSearchTvShow } from '../../api';
import { SEARCH_TYPES } from '../types';

export const loadSearch = (query, page = 1, withMore = false) => {
	return async (dispatch) => {
		const response = await doSearch(query, page);
		const type = withMore ? SEARCH_TYPES.DO_SEARCH_MORE : SEARCH_TYPES.DO_SEARCH;
		dispatch({ type, payload: { response, query, type: "all" } });
	}
}

export const loadSearchMovie = (query, page = 1, withMore = false) => {
	return async (dispatch) => {
		const response = await doSearchMovie(query, page);
		const type = withMore ? SEARCH_TYPES.DO_SEARCH_MORE : SEARCH_TYPES.DO_SEARCH;
		dispatch({ type, payload: { response, query, type: "movie" } });
	}
}

export const loadSearchTvShow = (query, page = 1, withMore = false) => {
	return async (dispatch) => {
		const response = await doSearchTvShow(query, page);
		const type = withMore ? SEARCH_TYPES.DO_SEARCH_MORE : SEARCH_TYPES.DO_SEARCH;
		dispatch({ type, payload: { response, query, type: "tv" } });
	}
}
