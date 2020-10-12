import { store } from './index';

const inititalState = {
    movie: {
        popular: [],
        upcoming: [],
        trending: [],
        active: null,
        keywords: [],
        recommendations: [],
        related: [],
        moviesTypes: {
            results: []
        }
    },
    search: {
        search: {
            page: 0,
            results: [],
        },
        query: "",
        type: ""
    }
}

describe('store test', () => {

    test('check store', () => {
        expect(typeof store.dispatch).toEqual("function");
        expect(typeof store.getState).toEqual("function");
        expect(store.getState()).toEqual(inititalState);
    });

});
