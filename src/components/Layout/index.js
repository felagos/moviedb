import React from 'react';
import { Navbar } from '../Navbar';
import { Main, Footer } from './styles';

export const Layout = React.memo(
	({ children }) => {
		return (
			<>
				<Navbar />
				<Main data-testid="main">
					{children}
				</Main>
				<Footer data-testid="footer" />
			</>
		)
	}

);
