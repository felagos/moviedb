import React, { useRef } from 'react';
import { Button, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useToggle } from '../../hooks';
import { MenuSelector } from '../MenuItem';
import { Sidebar } from '../Sidebar';
import { Nav, ButtonMenu, HeaderLink, LinkContainer, ButtonAuth } from './styles';

const linksMovie = [
	{ to: "/", name: "Popular" },
	{ to: "/", name: "Proximamente" },
	{ to: "/", name: "Lo más valorado" }
];
const linksShow = [
	{ to: "/", name: "Popular" },
	{ to: "/", name: "On TV" },
	{ to: "/", name: "Lo más valorado" }
];
const linksPeople = [
	{ to: "/", name: "Popular" }
];

export const Navbar = () => {
	const [openMovie, handleOpenMovie, handleCloseMovie] = useToggle(false);
	const [openTvShow, handleOpenTvShow, handleCloseTvShow] = useToggle(false);
	const [openPeople, handleOpenPeople, handleClosePeople] = useToggle(false);
	const [openDrawer, handleOpenDrawer, handleCloseDrawer] = useToggle(false);

	const btnMovie = useRef(null);
	const btnShow = useRef(null);
	const btnPeople = useRef(null);

	return (
		<>
			<Nav data-testid="navbar" position="static">
				<Toolbar>
					<ButtonMenu data-testid="btnDrawer" onClick={handleOpenDrawer}>
						<MenuIcon />
					</ButtonMenu>
					<HeaderLink to="/">
						<Typography variant="h6">
							Movie App
						</Typography>
					</HeaderLink>
					<LinkContainer>
						<Button ref={btnMovie} onClick={handleOpenMovie} variant="outlined">Películas</Button>
						<MenuSelector anchorEl={btnMovie.current} open={openMovie} handleClose={handleCloseMovie} links={linksMovie} />

						<Button ref={btnShow} variant="outlined" onClick={handleOpenTvShow}>TV Shows</Button>
						<MenuSelector anchorEl={btnShow.current} open={openTvShow} handleClose={handleCloseTvShow} links={linksShow} />

						<Button ref={btnPeople} variant="outlined" onClick={handleOpenPeople}>Personas</Button>
						<MenuSelector anchorEl={btnPeople.current} open={openPeople} handleClose={handleClosePeople} links={linksPeople} />
					</LinkContainer>
					<ButtonAuth>
						<IconButton>
							<AccountCircle />
						</IconButton>
					</ButtonAuth>
				</Toolbar>
			</Nav>
			<Sidebar open={openDrawer} handleClose={handleCloseDrawer} />
		</>
	)
}
