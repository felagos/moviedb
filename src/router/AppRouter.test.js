import { cleanup, render, waitForElement } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { theme } from '../theme';
import { AppRouter } from './AppRouter';

import '@testing-library/jest-dom';

const mockStore = configureStore([thunk]);
const store = mockStore({
    media: {
        mediasTypes: {
            results: [],
            page: 0,
        },
        popular: [],
        upcoming: [],
        trending: [],
        active: {
            poster_path: "",
            title: "",
            release_date: "2020-12-12",
            genres: [],
            vote_average: 5,
            overview: "",
            original_title: "",
            status: "",
            spoken_languages: []
        },
        keywords: [],
        recommendations: [],
        related: []
    },
    search: {
        search: {
            page: 0,
            results: [],
        },
        query: "",
        type: ""
    }
});

const renderRouter = (path) => (
    render(
        <MemoryRouter initialEntries={[path]}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <AppRouter />
                </ThemeProvider>
            </Provider>
        </MemoryRouter>
    )
);

describe("AppRouter Test", () => {

    afterEach(cleanup);

    test("render home page", async () => {
        store.dispatch = jest.fn();
        const { getByTestId } = renderRouter("/");

        const element = await waitForElement(() => getByTestId("home-page"));
        expect(element).toBeInTheDocument();
    });

    test("render detail page", async () => {
        store.dispatch = jest.fn();
        const { getByTestId } = renderRouter("/detail/movie/586334");

        const element = await waitForElement(() => getByTestId("detail-page"));
        expect(element).toBeInTheDocument();
    });

    test("render search page", async () => {
        store.dispatch = jest.fn();
        const { getByTestId } = renderRouter("/search?query=one");

        const element = await waitForElement(() => getByTestId("search-page"));
        expect(element).toBeInTheDocument();
    });

    test("render tv page", async () => {
        store.dispatch = jest.fn();
        const { getByTestId } = renderRouter("/tv/popular");

        const element = await waitForElement(() => getByTestId("media-page"));
        expect(element).toBeInTheDocument();
    });

    test("render not found page", async () => {
        store.dispatch = jest.fn();
        const { getByTestId } = renderRouter("/unknow");

        const element = await waitForElement(() => getByTestId("notfound-page"));
        expect(element).toBeInTheDocument();
    });

});
