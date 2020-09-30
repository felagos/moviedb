import React from 'react';
import { Sections } from './index';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../theme';
import { cleanup } from '@testing-library/react-hooks';
import { getByTestId, render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const mockStore = configureStore([thunk]);
const store = mockStore({
    movie: {
        popular: [{ poster_path: "imagen.jpg", original_title: "item titulo", title: "titulo", release_date: "2020-02-12", id: Date.now() }],
        upcoming: [{ poster_path: "imagen.jpg", original_title: "item titulo", title: "titulo", release_date: "2020-02-12", id: Date.now() }],
        trending: [{ poster_path: "imagen.jpg", original_title: "item titulo", title: "titulo", release_date: "2020-02-12", id: Date.now() }]
    }
});

describe("Sections Test", () => {

    afterEach(cleanup);

    test('should render', () => {
        const { getAllByTestId } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Sections />
                    </ThemeProvider>
                </Provider>
            </MemoryRouter>
        );
        const cards = getAllByTestId("card-media");

        expect(cards.length).toEqual(3);
    })



});