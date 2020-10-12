import { cleanActiveMedia, loadUpcomingMovies, loadKeywordsMedia, loadPopularMovies, loadRecommendationsMedia, loadRelatedVideos, loadTrendingMovies, loadDetailMedia } from './medias';
import { getDetailMedia, getKeywordsMedias, getRelatedMedias, getPopularMovies, getRecommendationsMedias, getTrendingMovies, getUpcomingMovies } from '../../api';
import { MEDIA_TYPES } from '../types';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

jest.mock('../../api');

let middlewares = [thunk];
let mockStore = configureStore(middlewares);
let state = {
    popular: [],
    upcoming: [],
    trending: [],
    active: null,
    keywords: [],
    recommendations: [],
    related: []
};
let store = mockStore(state);

describe('movie actions test', () => {

    beforeEach(() => {
        middlewares = [thunk];
        mockStore = configureStore(middlewares);
        state = {
            popular: [],
            upcoming: [],
            trending: [],
            active: null,
            keywords: [],
            recommendations: [],
            related: []
        };
        store = mockStore(state);
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('cleanActiveMedia test ', () => {
        const response = cleanActiveMedia();
        expect(response.type).toEqual(MEDIA_TYPES.CLEAN_ACTIVE);
    });

    test('loadPopularMovies test', async () => {
        const data = [
            { poster_path: "" }
        ];
        getPopularMovies.mockResolvedValue(data);

        await store.dispatch(loadPopularMovies());

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MEDIA_TYPES.LOAD_POPULAR);
    });

    test('loadUpcomingMovies test', async () => {
        const data = [
            { poster_path: "" }
        ];
        getUpcomingMovies.mockResolvedValue(data);

        await store.dispatch(loadUpcomingMovies());

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MEDIA_TYPES.LOAD_UPCOMING);
    });

    test('loadTrendingMovies test', async () => {
        const data = [
            { poster_path: "" }
        ];
        getTrendingMovies.mockResolvedValue(data);

        await store.dispatch(loadTrendingMovies());

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MEDIA_TYPES.LOAD_TRENDING);
    });

    test('getDetailMedia test', async () => {
        const data = {};
        getDetailMedia.mockResolvedValue(data);

        await store.dispatch(loadDetailMedia(Date.now()));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MEDIA_TYPES.SET_ACTIVE);
    });

    test('loadKeywordsMedia test', async () => {
        const data = [{}];
        getKeywordsMedias.mockResolvedValue(data);

        await store.dispatch(loadKeywordsMedia(Date.now()));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MEDIA_TYPES.LOAD_KEYWORDS);
    });

    test('loadRelatedVideos test', async () => {
        const data = [{}];
        getRelatedMedias.mockResolvedValue(data);

        await store.dispatch(loadRelatedVideos(Date.now()));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MEDIA_TYPES.LOAD_RELATED);
    });

    test('loadRecommendationsMedia test', async () => {
        const data = [
            { poster_path: "" }
        ];
        getRecommendationsMedias.mockResolvedValue(data);

        await store.dispatch(loadRecommendationsMedia(Date.now()));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MEDIA_TYPES.LOAD_RECCOMENDATIONS);
    });

});
