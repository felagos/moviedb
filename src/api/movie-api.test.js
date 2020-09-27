import * as api from './movie-api';
import axios from 'axios';
import { ENV } from '../env';

jest.mock('axios');

describe('Movie api test', () => {

    test('getPopularMovies - return data', async () => {
        const url = `${ENV.API_URL}/movie/popular?page=1`;

        const mockResponse = { data: { results: [{}] } };
        axios.get = jest.fn().mockResolvedValue(mockResponse);

        const response = await api.getPopularMovies();

        expect(response).toEqual(mockResponse.data.results);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('getUpcomingMovies - return data', async () => {
        const url = `${ENV.API_URL}/movie/upcoming?page=1`;

        const mockResponse = { data: { results: [{}] } };
        axios.get = jest.fn().mockResolvedValue(mockResponse);

        const response = await api.getUpcomingMovies();

        expect(response).toEqual(mockResponse.data.results);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('getTrendingMovies - return data', async () => {
        const url = `${ENV.API_URL}/trending/movie/week`;

        const mockResponse = { data: { results: [{}] } };
        axios.get = jest.fn().mockResolvedValue(mockResponse);

        const response = await api.getTrendingMovies();

        expect(response).toEqual(mockResponse.data.results);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('getDetailMovie - return data', async () => {
        const id = Date.now();
        const url = `${ENV.API_URL}/movie/${id}`;

        const mockResponse = { data: {} };
        axios.get = jest.fn().mockResolvedValue(mockResponse);

        const response = await api.getDetailMovie(id);

        expect(response).toEqual(mockResponse.data);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('getRecommendationsMovies - return data', async () => {
        const id = Date.now();
        const url = `${ENV.API_URL}/movie/${id}/recommendations`;

        const mockResponse = { data: { results: [{}] } };
        axios.get = jest.fn().mockResolvedValue(mockResponse);

        const response = await api.getRecommendationsMovies(id);

        expect(response).toEqual(mockResponse.data.results);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('getKeywordsMovies - return data', async () => {
        const id = Date.now();
        const url = `${ENV.API_URL}/movie/${id}/keywords`;

        const mockResponse = { data: { keywords: [{}] } };
        axios.get = jest.fn().mockResolvedValue(mockResponse);

        const response = await api.getKeywordsMovies(id);

        expect(response).toEqual(mockResponse.data.keywords);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('getRelatedVideos - return data', async () => {
        const id = Date.now();
        const url = `${ENV.API_URL}/movie/${id}/videos`;

        const mockResponse = { data: { results: [{}] } };
        axios.get = jest.fn().mockResolvedValue(mockResponse);

        const response = await api.getRelatedVideos(id);

        expect(response).toEqual(mockResponse.data.results);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

});
