import axios from './axios';
import { ENV } from '../env';

export const doSearch = async (query, page = 1) => {
	const response = await axios.get(`${ENV.API_URL}/search/multi?page=${page}&query=${encodeURI(query)}`);
	return response.data;
}

export const doSearchMovie = async (query, page = 1) => {
	const response = await axios.get(`${ENV.API_URL}/search/movie?page=${page}&query=${encodeURI(query)}`);
	return response.data;
}

export const doSearchTvShow = async (query, page = 1) => {
	const response = await axios.get(`${ENV.API_URL}/search/tv?page=${page}&query=${encodeURI(query)}`);
	return response.data;
}
