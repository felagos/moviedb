import React, { useRef } from 'react';
import { Button, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useToggle } from '../../hooks';
import { MenuSelector } from '../MenuItem';
import { Sidebar } from '../Sidebar';
import { Nav, ButtonMenu, HeaderLink, LinkContainer, ButtonAuth } from './styles';
import { getTokeLogin } from '../../api';

const linksMovie = [
	{ to: "/movie/popular", name: "Popular" },
	{ to: "/movie/upcoming", name: "Proximamente" },
	{ to: "/movie/top-rated", name: "Lo más valorado" }
];
const linksShow = [
	{ to: "/tv/popular", name: "Popular" },
	{ to: "/tv/on_the_air", name: "On TV" },
	{ to: "/tv/top-rated", name: "Lo más valorado" }
];

export const Navbar = () => {
	const [openMovie, handleOpenMovie, handleCloseMovie] = useToggle(false);
	const [openTvShow, handleOpenTvShow, handleCloseTvShow] = useToggle(false);
	const [openDrawer, handleOpenDrawer, handleCloseDrawer] = useToggle(false);

	const btnMovie = useRef(null);
	const btnShow = useRef(null);

	const token = localStorage.getItem("token");

	const handleLogin = async () => {
		const urlCallback = window.location.origin;
		const response = await getTokeLogin();
		window.location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=${urlCallback}`;
	};

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

					</LinkContainer>
					{
						!token && <ButtonAuth onClick={handleLogin}>
							<IconButton>
								<AccountCircle />
							</IconButton>
						</ButtonAuth>
					}
				</Toolbar>
			</Nav>
			<Sidebar open={openDrawer} handleClose={handleCloseDrawer} />
		</>
	)
}
