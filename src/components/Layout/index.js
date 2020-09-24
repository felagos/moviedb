import React from 'react';
import { Container } from '@material-ui/core';
import { Navbar } from '../Navbar';

import './styles.scss';

export const Layout = React.memo(
	({ children }) => {
		return (
			<>
				<Navbar />
				<Container className="layout-container">
					{children}
				</Container>
				<div className="layout-footer"></div>
			</>
		)
	}

);
