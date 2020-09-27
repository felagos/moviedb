/* istanbul ignore file */

import axios from 'axios';
import { ENV } from '../env';

axios.interceptors.request.use((config) => {
	const urlParams = `api_key=${ENV.API_KEY}&language=es-ES`;
	config.url = config.url.includes("=") ? `${config.url}&${urlParams}` : `${config.url}?${urlParams}`;
	return config;
}, (error) => {
	return Promise.reject(error);
});

export default axios;
