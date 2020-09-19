import axios from './axios';
import { ENV } from '../env';

export const getGenres = async () => {
	const response = await axios.get(`${ENV.API_URL}/genre/movie/list?language=es-ES`);
	return response.data;
}
