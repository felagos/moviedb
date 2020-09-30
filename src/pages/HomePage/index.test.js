import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import HomePage from './index';

const mockStore = configureStore([thunk]);
const store = mockStore({
    movie: {
        popular: [],
        upcoming: [],
        trending: [],
        active: null,
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

describe('HomePage Test', () => {

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    test('should render', () => {
        store.dispatch = jest.fn();
        const { container } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <HomePage />
                    </ThemeProvider>
                </Provider>
            </MemoryRouter>
        );
        expect(container.childNodes.length).toBeGreaterThan(0);
    });


});
