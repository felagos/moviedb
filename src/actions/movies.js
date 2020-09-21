import { getDetailMovie, getKeywordsMovies, getRelatedVideos, getPopularMovies, getRecommendationsMovies, getTrendingMovies, getUpcomingMovies } from '../api';
import { MOVIE_TYPES } from '../types';

const _loadPopularMovies = (movies) => ({ type: MOVIE_TYPES.LOAD_POPULAR, payload: movies });
const _loadUpcomingMovies = (movies) => ({ type: MOVIE_TYPES.LOAD_UPCOMING, payload: movies });
const _loadTrendingMovies = (movies) => ({ type: MOVIE_TYPES.LOAD_TRENDING, payload: movies });
const _loadKeywordsMovies = (keywords) => ({ type: MOVIE_TYPES.LOAD_KEYWORDS, payload: keywords });
const _loadRecommendationsMovies = (recommendations) => ({ type: MOVIE_TYPES.LOAD_RECCOMENDATIONS, payload: recommendations });
const _setActiveMovie = (movie) => ({ type: MOVIE_TYPES.SET_ACTIVE, payload: movie });

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


export const loadDetailMovie = (id) => {
	return async (dispatch) => {
		const response = await getDetailMovie(id);
		dispatch(_setActiveMovie(response));
	}
};

export const loadKeywordsMovie = (id) => {
	return async (dispatch) => {
		const keywords = await getKeywordsMovies(id);
		dispatch(_loadKeywordsMovies(keywords));
	}
};

export const loadRecommendationsMovie = (id) => {
	return async (dispatch) => {
		let recommendations = await getRecommendationsMovies(id);
		recommendations = recommendations.filter(item => { return !!item.poster_path });
		dispatch(_loadRecommendationsMovies(recommendations));
	}
};

export const loadRelatedVideos = (id) => {
	return async (dispatch) => {
		const related = await getRelatedVideos(id);
		dispatch({
			type: MOVIE_TYPES.LOAD_RELATED,
			payload: related
		});
	}
};

export const clenActiveMovie = () => ({
	type: MOVIE_TYPES.CLEAN_ACTIVE
});
