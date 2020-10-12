import { getDetailMedia, getKeywordsMedias, getRelatedMedias, getPopularMovies, getRecommendationsMedias, getTrendingMovies, getUpcomingMovies, getMediasByType } from '../../api';
import { MEDIA_TYPES } from '../types';

const _loadPopularMovies = (movies) => ({ type: MEDIA_TYPES.LOAD_POPULAR, payload: movies });
const _loadUpcomingMovies = (movies) => ({ type: MEDIA_TYPES.LOAD_UPCOMING, payload: movies });
const _loadTrendingMovies = (movies) => ({ type: MEDIA_TYPES.LOAD_TRENDING, payload: movies });
const _loadKeywordsMedias = (keywords) => ({ type: MEDIA_TYPES.LOAD_KEYWORDS, payload: keywords });
const _loadRecommendationsMedia = (recommendations) => ({ type: MEDIA_TYPES.LOAD_RECCOMENDATIONS, payload: recommendations });
const _setActiveMedia = (movie) => ({ type: MEDIA_TYPES.SET_ACTIVE, payload: movie });

export const loadPopularMovies = () => {
	return async (dispatch) => {
		let response = await getPopularMovies();
		response = response.filter(item => { return !!item.poster_path });
		dispatch(_loadPopularMovies(response));
	}
};

export const loadUpcomingMovies = () => {
	return async (dispatch) => {
		let response = await getUpcomingMovies();
		response = response.filter(item => { return !!item.poster_path });
		dispatch(_loadUpcomingMovies(response));
	}
};

export const loadTrendingMovies = () => {
	return async (dispatch) => {
		let response = await getTrendingMovies();
		response = response.filter(item => { return !!item.poster_path });
		dispatch(_loadTrendingMovies(response));
	}
};

export const loadDetailMedia = (id, type) => {
	return async (dispatch) => {
		const response = await getDetailMedia(id, type);
		dispatch(_setActiveMedia(response));
	}
};

export const loadKeywordsMedia = (id, type) => {
	return async (dispatch) => {
		const keywords = await getKeywordsMedias(id, type);
		dispatch(_loadKeywordsMedias(keywords));
	}
};

export const loadRecommendationsMedia = (id, type) => {
	return async (dispatch) => {
		let recommendations = await getRecommendationsMedias(id, type);
		recommendations = recommendations.filter(item => { return !!item.poster_path });
		dispatch(_loadRecommendationsMedia(recommendations));
	}
};

export const loadRelatedVideos = (id, type) => {
	return async (dispatch) => {
		const related = await getRelatedMedias(id, type);
		dispatch({
			type: MEDIA_TYPES.LOAD_RELATED,
			payload: related
		});
	}
};

export const cleanActiveMedia = () => ({
	type: MEDIA_TYPES.CLEAN_ACTIVE
});


export const loadMediasByType = (type, category) => {
	return async (dispatch) => {
		const response = await getMediasByType(type, category);
		dispatch({
			type: MEDIA_TYPES.LOAD_MEDIA_BY_TYPE,
			payload: response
		});
	}
};

export const loadMoreMediasByType = (type, category, page) => {
	return async (dispatch) => {
		const response = await getMediasByType(type, category, page);
		dispatch({
			type: MEDIA_TYPES.LOAD_MORE_MEDIA_BY_TYPE,
			payload: response
		});
	}
};