import { cleanup, render, wait } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import HomePage from './index';
import { getTokenSession } from '../../api/auth-api';
import { AUTH_ACTIONS } from '../../redux';

jest.mock('../../api/auth-api');

const mockStore = configureStore([thunk]);
const store = mockStore({
    media: {
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
    },
    auth: {
        token: null
    }
});

describe('HomePage Test', () => {

    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    test('should render', () => {
        mockStore.dispatch = jest.fn();

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

    test('handle session - approved', async () => {
        global.window.history.replaceState = jest.fn();
        const response = {
            session_id: "token"
        };

        getTokenSession.mockResolvedValue(response);

        await wait(() => {
            render(
                <MemoryRouter initialEntries={["/?request_token=token&approved=true"]}>
                    <Provider store={store}>
                        <ThemeProvider theme={theme}>
                            <HomePage />
                        </ThemeProvider>
                    </Provider>
                </MemoryRouter>
            );
        });

       const actions = store.getActions();
       store.clearActions();

       expect(actions[0]).toEqual({ type: AUTH_ACTIONS.SET_TOKEN, payload: "token" });
    });

    xtest('handle session - denied', async () => {
        global.window.history.replaceState = jest.fn();

        await wait(() => {
            render(
                <MemoryRouter initialEntries={["/?request_token=token&denied=true"]}>
                    <Provider store={store}>
                        <ThemeProvider theme={theme}>
                            <HomePage />
                        </ThemeProvider>
                    </Provider>
                </MemoryRouter>
            );
        });

        const actions = store.getActions();
       
       expect(actions).toEqual([]);
    });


});
