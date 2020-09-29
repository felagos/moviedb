import { clenActiveMovie, loadUpcomingMovies, loadDetailMovie, loadKeywordsMovie, loadPopularMovies, loadRecommendationsMovie, loadRelatedVideos, loadTrendingMovies } from './movies';
import { getDetailMovie, getKeywordsMovies, getRelatedVideos, getPopularMovies, getRecommendationsMovies, getTrendingMovies, getUpcomingMovies } from '../../api';
import { MOVIE_TYPES } from '../types';
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

    test('clenActiveMovie test ', () => {
        const response = clenActiveMovie();
        expect(response.type).toEqual(MOVIE_TYPES.CLEAN_ACTIVE);
    });

    test('loadPopularMovies test', async () => {
        const data = [
            { poster_path: "" }
        ];
        getPopularMovies.mockResolvedValue(data);

        await store.dispatch(loadPopularMovies());

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MOVIE_TYPES.LOAD_POPULAR);
    });

    test('loadUpcomingMovies test', async () => {
        const data = [
            { poster_path: "" }
        ];
        getUpcomingMovies.mockResolvedValue(data);

        await store.dispatch(loadUpcomingMovies());

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MOVIE_TYPES.LOAD_UPCOMING);
    });

    test('loadTrendingMovies test', async () => {
        const data = [
            { poster_path: "" }
        ];
        getTrendingMovies.mockResolvedValue(data);

        await store.dispatch(loadTrendingMovies());

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MOVIE_TYPES.LOAD_TRENDING);
    });

    test('loadDetailMovie test', async () => {
        const data = {};
        getDetailMovie.mockResolvedValue(data);

        await store.dispatch(loadDetailMovie(Date.now()));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MOVIE_TYPES.SET_ACTIVE);
    });

    test('loadKeywordsMovie test', async () => {
        const data = [{}];
        getKeywordsMovies.mockResolvedValue(data);

        await store.dispatch(loadKeywordsMovie(Date.now()));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MOVIE_TYPES.LOAD_KEYWORDS);
    });

    test('loadRelatedVideos test', async () => {
        const data = [{}];
        getRelatedVideos.mockResolvedValue(data);

        await store.dispatch(loadRelatedVideos(Date.now()));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MOVIE_TYPES.LOAD_RELATED);
    });

    test('loadRecommendationsMovie test', async () => {
        const data = [
            { poster_path: "" }
        ];
        getRecommendationsMovies.mockResolvedValue(data);

        await store.dispatch(loadRecommendationsMovie(Date.now()));

        const actions = store.getActions();
        expect(actions[0].type).toEqual(MOVIE_TYPES.LOAD_RECCOMENDATIONS);
    });

});
