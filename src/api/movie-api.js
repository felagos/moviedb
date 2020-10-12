import axios from './axios';
import { ENV } from '../env';

export const getPopularMovies = async () => {
	const response = await axios.get(`${ENV.API_URL}/movie/popular?page=1`);
	return response.data.results;
}

export const getUpcomingMovies = async () => {
	const response = await axios.get(`${ENV.API_URL}/movie/upcoming?page=1`);
	return response.data.results;
}

export const getTrendingMovies = async () => {
	const response = await axios.get(`${ENV.API_URL}/trending/movie/week`);
	return response.data.results;
}

export const getDetailMovie = async (id) => {
	const response = await axios.get(`${ENV.API_URL}/movie/${id}`);
	return response.data;
}

export const getRecommendationsMovies = async (id) => {
	const response = await axios.get(`${ENV.API_URL}/movie/${id}/recommendations`);
	return response.data.results;
}

export const getKeywordsMovies = async (id) => {
	const response = await axios.get(`${ENV.API_URL}/movie/${id}/keywords`);
	return response.data.keywords;
}

export const getRelatedVideos = async (id) => {
	const response = await axios.get(`${ENV.API_URL}/movie/${id}/videos`);
	return response.data.results;
}


export const getMoviesByType = async (type, page = 1) => {
	const response = await axios.get(`${ENV.API_URL}/movie/${type}?page=${page}`);
	return response.data;
}