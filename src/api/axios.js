import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

axios.interceptors.request.use((config) => {
	config.url = config.url.includes("=") ? `${config.url}&api_key=${API_KEY}` : `${config.url}?api_key=${API_KEY}`;
	return config;
}, (error) => {
	return Promise.reject(error);
});

export default axios;
