import * as api from './media-api';
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

    test('getDetailMedia - return data', async () => {
        const id = Date.now();
        const type = "movie"
        const url = `${ENV.API_URL}/${type}/${id}`;

        const mockResponse = { data: {} };
        axios.get = jest.fn().mockResolvedValue(mockResponse);

        const response = await api.getDetailMedia(id, type);

        expect(response).toEqual(mockResponse.data);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('getRecommendationsMedias - return data', async () => {
        const id = Date.now();
        const type = "movie"
        const url = `${ENV.API_URL}/movie/${id}/recommendations`;

        const mockResponse = { data: { results: [{}] } };
        axios.get = jest.fn().mockResolvedValue(mockResponse);

        const response = await api.getRecommendationsMedias(id, type);

        expect(response).toEqual(mockResponse.data.results);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('getKeywordsMedias - return data', async () => {
        const id = Date.now();
        const type = "movie"
        const url = `${ENV.API_URL}/movie/${id}/keywords`;

        const mockResponse = { data: { keywords: [{}] } };
        axios.get = jest.fn().mockResolvedValue(mockResponse);

        const response = await api.getKeywordsMedias(id, type);

        expect(response).toEqual(mockResponse.data.keywords);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('getRelatedVideos - return data', async () => {
        const id = Date.now();
        const type = "movie"
        const url = `${ENV.API_URL}/movie/${id}/videos`;

        const mockResponse = { data: { results: [{}] } };
        axios.get = jest.fn().mockResolvedValue(mockResponse);

        const response = await api.getRelatedMedias(id, type);

        expect(response).toEqual(mockResponse.data.results);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

});
