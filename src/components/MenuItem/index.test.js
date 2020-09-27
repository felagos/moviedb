import { render } from '@testing-library/react';
import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { MenuSelector } from './index';
import { theme } from '../../theme';
import { MemoryRouter } from 'react-router-dom';
import { Popper } from '@material-ui/core';


import '@testing-library/jest-dom';

describe('MenuSelector test', () => {

    test('should render', () => {
        const links = [
            { to: "", name: "nombre" },
            { to: "", name: "nombre 2" }
        ];
        const ref = React.createRef();
        const { getByText } = render(
            <MemoryRouter>
                <ThemeProvider theme={theme}>
                    <div ref={ref}></div>
                    <MenuSelector anchorEl={ref.current} open handleClose={jest.fn()} links={links} />
                </ThemeProvider>
            </MemoryRouter>
        );

        links.forEach(link => expect(getByText(link.name)).toBeInTheDocument());
    })


})
