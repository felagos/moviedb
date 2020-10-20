import { cleanup, render, waitForElement } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from '../redux/store';
import { theme } from '../theme';
import { AppRouter } from './AppRouter';

import '@testing-library/jest-dom';

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
        const { getByTestId } = renderRouter("/");

        const element = await waitForElement(() => getByTestId("home-page"));
        expect(element).toBeInTheDocument();
    });

    xtest("render detail page", async () => {
        const { getByTestId } = renderRouter("/detail/movie/586334");

        const element = await waitForElement(() => getByTestId("detail-page"));
        expect(element).toBeInTheDocument();
    });

    xtest("render search page", async () => {
        const { getByTestId } = renderRouter("/search?query=one");

        const element = await waitForElement(() => getByTestId("search-page"));
        expect(element).toBeInTheDocument();
    });

    xtest("render search page", async () => {
        const { getByTestId } = renderRouter("/tv/popular");

        const element = await waitForElement(() => getByTestId("media-page"));
        expect(element).toBeInTheDocument();
    });

    xtest("render not found page", async () => {
        const { getByTestId } = renderRouter("/unknow");

        const element = await waitForElement(() => getByTestId("notfound-page"));
        expect(element).toBeInTheDocument();
    });

});
