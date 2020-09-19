import { Container } from '@material-ui/core'
import React from 'react'
import { Navbar } from '../Navbar'

export const HomeLayout = ({ children }) => {
	return (
		<>
		<Navbar />
		<Container className="home-container" fixed>
			{children}
		</Container>
		</>
	)
}
