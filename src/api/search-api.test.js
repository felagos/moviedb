import { doSearch, doSearchMovie, doSearchTvShow } from './search-api';
import axios from 'axios';
import { ENV } from '../env';

jest.mock('axios');

describe('Search api test', () => {

    test('doSearch - return data', async () => {
        const query = "busqueda";
        const page = 1;
        const url = `${ENV.API_URL}/search/multi?page=${page}&query=${encodeURI(query)}`;

        const mockResponse = { data: [{}] };
        axios.get = jest.fn().mockResolvedValue(mockResponse);
        
        const response = await doSearch(query, page);

        expect(response).toEqual(mockResponse.data);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('doSearchMovie - return data', async () => {
        const query = "busqueda";
        const page = 1;
        const url = `${ENV.API_URL}/search/movie?page=${page}&query=${encodeURI(query)}`;

        const mockResponse = { data: [{}] };
        axios.get = jest.fn().mockResolvedValue(mockResponse);
        
        const response = await doSearchMovie(query, page);

        expect(response).toEqual(mockResponse.data);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('doSearchTvShow - return data', async () => {
        const query = "busqueda";
        const page = 1;
        const url = `${ENV.API_URL}/search/tv?page=${page}&query=${encodeURI(query)}`;

        const mockResponse = { data: [{}] };
        axios.get = jest.fn().mockResolvedValue(mockResponse);
        
        const response = await doSearchTvShow(query, page);

        expect(response).toEqual(mockResponse.data);
        expect(axios.get).toHaveBeenCalledWith(url);
    });

});
