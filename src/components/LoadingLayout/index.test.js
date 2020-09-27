import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LoadingLayout } from './index';
import { theme } from '../../theme';

import '@testing-library/jest-dom';

describe('LoadingLayout test', () => {
    
    test('should render', () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <LoadingLayout />
            </ThemeProvider>
        );

        const msg = getByText(/Cargando página, por favor espere .../i);
        expect(msg).toBeInTheDocument();
    });

})
