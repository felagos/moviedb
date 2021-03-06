import { store } from './index';

const inititalState = {
    media: {
        popular: [],
        upcoming: [],
        trending: [],
        active: null,
        keywords: [],
        recommendations: [],
        related: [],
        mediasTypes: {
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
    },
    auth: {
        token: null
    }
}

describe('store test', () => {

    test('check store', () => {
        expect(typeof store.dispatch).toEqual("function");
        expect(typeof store.getState).toEqual("function");
        expect(store.getState()).toEqual(inititalState);
    });

});
