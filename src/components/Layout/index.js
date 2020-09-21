import { Container } from '@material-ui/core'
import React from 'react'
import { Navbar } from '../Navbar'

export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<Container className="home-container">
				{children}
			</Container>
		</>
	)
}
