import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Link className="navbar-link-home" to="/">
					<Typography variant="h6">
						Movie App
					</Typography>
				</Link>
				<div className="navbar-container-link">
					<Link to="/">Películas</Link>
					<Link to="/">TV Shows</Link>
					<Link to="/">Personas</Link>
				</div>
			</Toolbar>
		</AppBar>
	)
}
