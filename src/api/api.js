import axios from './axios';
import { ENV } from '../env';

export const getGenres = async () => {
	const response = await axios.get(`${ENV.API_URL}/genre/movie/list`);
	return response.data.genres;
}

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
