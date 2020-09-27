import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Navbar } from './index';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

import '@testing-library/jest-dom';

describe('NavBar Test', () => {

    const renderComponent = () => (
        render(
            <MemoryRouter>
                <ThemeProvider theme={theme}>
                    <Navbar />
                </ThemeProvider>
            </MemoryRouter>
        )
    )

    afterEach(cleanup);

    test('should render', () => {
        const { getByTestId, queryByTestId } = renderComponent();

        expect(getByTestId("navbar")).toBeInTheDocument();
        expect(queryByTestId("drawer")).not.toBeInTheDocument();
    });

    test('open drawer', () => {
        const { getByTestId, queryByTestId } = renderComponent();

        expect(queryByTestId("drawer")).not.toBeInTheDocument();

        const btn = queryByTestId("btnDrawer");
        fireEvent.click(btn);

        expect(getByTestId("drawer")).toBeInTheDocument();
    });


})
