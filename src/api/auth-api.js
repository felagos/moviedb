import axios from './axios';
import { ENV } from '../env';

export const getTokeLogin = async () => {
    const response = await axios.get(`${ENV.API_URL}/authentication/token/new`);
    return response.data;
};

export const getTokenSession = async (token) => {
    const body = { request_token: token };
    const response = await axios.post(`${ENV.API_URL}/authentication/session/new`, body);
    return response.data;
};

