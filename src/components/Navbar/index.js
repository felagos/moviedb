import React, { useRef } from 'react';
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useMenu } from '../../hooks/useMenu';

export const Navbar = () => {
	const [openMovie, handleOpenMovie, handleCloseMovie] = useMenu(false);
	const [openShow, handleOpenShow, handleCloseShow] = useMenu(false);
	const [openPeople, handleOpenPeople, handleClosePeople] = useMenu(false);

	const btnMovie = useRef(null);
	const btnShow = useRef(null);
	const btnPeople = useRef(null);

	return (
		<AppBar position="static">
			<Toolbar>
				<Link className="navbar-link-home" to="/">
					<Typography variant="h6">
						Movie App
					</Typography>
				</Link>
				<div className="navbar-container-link">
					<Button ref={btnMovie} onClick={handleOpenMovie} variant="outlined">Películas</Button>
					<Menu
						anchorEl={btnMovie.current}
						keepMounted
						open={openMovie}
						onClose={handleCloseMovie}
					>
						<MenuItem onClick={handleCloseMovie}>
							<Link className="navbar-link" to="/">Popular</Link>
						</MenuItem>
						<MenuItem onClick={handleCloseMovie}>
							<Link className="navbar-link" to="/">Proximamente</Link>
						</MenuItem>
						<MenuItem onClick={handleCloseMovie}>
							<Link className="navbar-link" to="/">Lo más valorado</Link>
						</MenuItem>
					</Menu>

					<Button ref={btnShow} variant="outlined" onClick={handleOpenShow}>TV Shows</Button>
					<Menu
						anchorEl={btnShow.current}
						keepMounted
						open={openShow}
						onClose={handleCloseShow}
					>
						<MenuItem onClick={handleCloseShow}>
							<Link className="navbar-link" to="/">Popular</Link>
						</MenuItem>
						<MenuItem onClick={handleCloseShow}>
							<Link className="navbar-link" to="/">On TV</Link>
						</MenuItem>
						<MenuItem onClick={handleCloseShow}>
							<Link className="navbar-link" to="/">Lo más valorado</Link>
						</MenuItem>
					</Menu>

					<Button ref={btnPeople} variant="outlined" onClick={handleOpenPeople}>Personas</Button>
					<Menu
						anchorEl={btnPeople.current}
						keepMounted
						open={openPeople}
						onClose={handleClosePeople}
					>
						<MenuItem onClick={handleClosePeople}>
							<Link className="navbar-link" to="/">Popular</Link>
						</MenuItem>
					</Menu>
				</div>
			</Toolbar>
		</AppBar>
	)
}
