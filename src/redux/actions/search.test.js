import { loadSearch, loadSearchMovie, loadSearchTvShow } from './search';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { cleanup } from '@testing-library/react';
import { doSearch, doSearchMovie, doSearchTvShow } from '../../api';
import { SEARCH_TYPES } from '../types';

jest.mock('../../api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const searchState = {
    search: {
        page: 0,
        results: [],
    },
    query: "",
    type: ""
};
const store = mockStore(searchState);

describe('search actions test', () => {

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    test('loadSearch test', async () => {
        doSearch.mockResolvedValue([]);
        await store.dispatch(loadSearch(""));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(SEARCH_TYPES.DO_SEARCH);
        expect(actions[0].payload).toEqual({ response: [], query: '', type: 'all' });
    });

    test('loadSearch test - more date', async () => {
        doSearch.mockResolvedValue([]);
        await store.dispatch(loadSearch("", 1, true));

        const actions = store.getActions();
        
        expect(actions[0].type).toEqual(SEARCH_TYPES.DO_SEARCH);
        expect(actions[0].payload).toEqual({ response: [], query: '', type: 'all' });
    });

    test('loadSearchMovie test', async () => {
        doSearchMovie.mockResolvedValue([]);
        await store.dispatch(loadSearchMovie(""));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(SEARCH_TYPES.DO_SEARCH);
    });

    test('loadSearchMovie test - more data', async () => {
        doSearchMovie.mockResolvedValue([]);
        await store.dispatch(loadSearchMovie("", 1, true));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(SEARCH_TYPES.DO_SEARCH);
    });

    test('loadSearchTvShow test', async () => {
        doSearchTvShow.mockResolvedValue([]);
        await store.dispatch(loadSearchTvShow(""));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(SEARCH_TYPES.DO_SEARCH);
    });

    test('loadSearchTvShow test - more data', async () => {
        doSearchTvShow.mockResolvedValue([]);
        await store.dispatch(loadSearchTvShow("", 1, true));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(SEARCH_TYPES.DO_SEARCH);
    });

});