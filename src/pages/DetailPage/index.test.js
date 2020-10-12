import React from 'react';
import DetailPage from './index';

import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { cleanup, render } from '@testing-library/react';

import '@testing-library/jest-dom';

const mockStore = configureStore([thunk]);
const store = mockStore({
    media: {
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
    }
});

describe("DetailPage Test", () => {

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    test('should render', () => {
        store.dispatch = jest.fn();
        const { getByTestId } = render(
            <MemoryRouter initialEntries={[`/movie/1-pelicula`]}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Route path="/:type/:id/" component={DetailPage} />
                    </ThemeProvider>
                </Provider>
            </MemoryRouter>
        );
        expect(getByTestId("post-app")).toBeInTheDocument();
    });


});