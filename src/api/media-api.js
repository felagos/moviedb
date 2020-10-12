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

export const getDetailMedia = async (id, type) => {
	const response = await axios.get(`${ENV.API_URL}/${type}/${id}`);
	return response.data;
}

export const getRecommendationsMedias = async (id, type) => {
	const response = await axios.get(`${ENV.API_URL}/${type}/${id}/recommendations`);
	return response.data.results;
}

export const getKeywordsMedias = async (id, type) => {
	const response = await axios.get(`${ENV.API_URL}/${type}/${id}/keywords`);
	return response.data.keywords;
}

export const getRelatedMedias = async (id, type) => {
	const response = await axios.get(`${ENV.API_URL}/${type}/${id}/videos`);
	return response.data.results;
}

export const getMediasByType = async (type, category, page = 1) => {
	const response = await axios.get(`${ENV.API_URL}/${type}/${category}?page=${page}`);
	return response.data;
}