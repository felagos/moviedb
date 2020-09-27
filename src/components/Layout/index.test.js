import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { Layout } from './index';

import '@testing-library/jest-dom';

describe('Layout test', () => {

    it('should render', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <ThemeProvider theme={theme}>
                    <Layout children={<div></div>} />
                </ThemeProvider>
            </MemoryRouter>
        );
        expect(getByTestId("navbar")).toBeInTheDocument();
        expect(getByTestId("main")).toBeInTheDocument();
        expect(getByTestId("footer")).toBeInTheDocument();
    });

})
