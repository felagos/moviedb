import React from 'react';
import SearchPage from './index';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { cleanup, fireEvent, wait, screen, render } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

import '@testing-library/jest-dom';

jest.mock('axios');

const search = {
    search: {
        page: 1,
        total_results: 45,
        total_pages: 3,
        results: [
            {
                poster_path: "/fVXWVeKcsTVFRDk5bTRQKy4pIlC.jpg",
                popularity: 28.507,
                vote_count: 61,
                video: false,
                media_type: "movie",
                id: 79082,
                adult: false,
                backdrop_path: "/dpwfPVCD2eQgEWY7GtCYAyRaVAP.jpg",
                original_language: "ja",
                original_title: "ONE PIECE 3D 麦わらチェイス",
                title: "One Piece 3D: Persecución del sombrero de paja",
                vote_average: 6.4,
                overview: "Es la undécima película de One Piece",
                release_date: "2011-03-19"
            },
            {
                poster_path: "/fVXWVeKcsTVFRDk5bTRQKy4pIlC.jpg",
                popularity: 28.507,
                vote_count: 61,
                video: false,
                media_type: "movie",
                id: 79082,
                adult: false,
                backdrop_path: "/dpwfPVCD2eQgEWY7GtCYAyRaVAP.jpg",
                original_language: "ja",
                original_title: "ONE PIECE 3D 麦わらチェイス",
                title: "One Piece 3D: Persecución del sombrero de paja",
                vote_average: 6.4,
                overview: "Es la undécima película de One Piece",
                release_date: "2011-03-19"
            }
        ]
    },
    query: "one piece",
    type: "movie"
}

const renderUI = () => render(
    <MemoryRouter initialEntries={[`/search?query=${encodeURI(search.query)}`]}>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SearchPage />
            </ThemeProvider>
        </Provider>
    </MemoryRouter>
);

describe('SearchPage', () => {

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    test('render search', async () => {
        const response = {
            data: {
                page: 1,
                total_results: 45,
                total_pages: 3,
                results: search.search.results
            }
        };
        axios.get = jest.fn().mockResolvedValue(response);

        await wait(() => {
            renderUI();
        });
        expect(screen.getAllByTestId("card-search").length).toEqual(search.search.results.length);
        expect(screen.getByText(/Cargar más/i)).not.toBeDisabled();
    });

    test('search all case', async () => {
        const response = {
            data: {
                page: 1,
                total_results: 45,
                total_pages: 3,
                results: search.search.results
            }
        };
        axios.get = jest.fn().mockResolvedValue(response);

        const { getByTestId, getAllByTestId } = renderUI();

        const btn = getByTestId("search-all");
        
        await wait(() => {
            fireEvent.click(btn);
        });

        expect(axios.get).toHaveBeenCalled();
        expect(getAllByTestId("card-search").length).toEqual(response.data.results.length);
    });

    test('button is disabled ', async () => {
        const response = {
            data: {
                page: 1,
                total_results: 2,
                total_pages: 1,
                results: []
            }
        };
        axios.get = jest.fn().mockResolvedValue(response);

        await wait(() => {
            renderUI();
        });

        expect(screen.getByText(/Cargar más/i)).toBeDisabled();
    })


});
