import React from 'react';
import { Sidebar } from './index';
import { theme } from '../../theme';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

describe('Sidebar test', () => {

    test('should render', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <ThemeProvider theme={theme}>
                    <Sidebar open handleClose={jest.fn()} />
                </ThemeProvider>
            </MemoryRouter>
        );

        expect(getByTestId("drawer")).toBeInTheDocument();
    })


});