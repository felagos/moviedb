import axios from 'axios';
import { ENV } from '../env';

axios.interceptors.request.use((config) => {
	config.url = config.url.includes("=") ? `${config.url}&api_key=${ENV.API_KEY}` : `${config.url}?api_key=${API_KEY}`;
	return config;
}, (error) => {
	return Promise.reject(error);
});

export default axios;
