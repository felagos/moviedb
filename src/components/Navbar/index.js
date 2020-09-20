import React, { useRef } from 'react';
import { AppBar, Button, Drawer, ListItem, Menu, MenuItem, Toolbar, Typography, List, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { useMenu } from '../../hooks/useMenu';

export const Navbar = () => {
	const [openMovie, handleOpenMovie, handleCloseMovie] = useMenu(false);
	const [openShow, handleOpenShow, handleCloseShow] = useMenu(false);
	const [openPeople, handleOpenPeople, handleClosePeople] = useMenu(false);
	const [openDrawer, handleOpenDrawer, handleCloseDrawer] = useMenu(false);

	const btnMovie = useRef(null);
	const btnShow = useRef(null);
	const btnPeople = useRef(null);

	return (
		<>
			<AppBar className="navbar-header" position="static">
				<Toolbar>
					<IconButton className="navbar-drawer" onClick={handleOpenDrawer}>
						<MenuIcon />
					</IconButton>
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
					<div className="navbar-btn-auth">
						<IconButton>
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>


			</AppBar>
			<Drawer anchor="left" open={openDrawer} onClose={handleCloseDrawer}>
				<div className="navbar-drawer-container">
					<Accordion className="navbar-accordion">
						<AccordionSummary expandIcon={<ExpandMoreIcon className="navbar-accordion-icon" />}>
							<Typography className="navbar-accordion-title">Películas</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List>
								<ListItem>
									<Link to="/">Popular</Link>
								</ListItem>
								<ListItem>
									<Link to="/">Proximamente</Link>
								</ListItem>
								<ListItem>
									<Link to="/">Lo más valorado</Link>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>

					<Accordion className="navbar-accordion">
						<AccordionSummary expandIcon={<ExpandMoreIcon className="navbar-accordion-icon" />}>
							<Typography className="navbar-accordion-title">TV Show</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List>
							<ListItem>
									<Link to="/">Popular</Link>
								</ListItem>
								<ListItem>
									<Link to="/">On TV</Link>
								</ListItem>
								<ListItem>
									<Link to="/">Lo más valorado</Link>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>

					<Accordion className="navbar-accordion">
						<AccordionSummary expandIcon={<ExpandMoreIcon className="navbar-accordion-icon" />}>
							<Typography className="navbar-accordion-title">Personas</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List>
								<ListItem>
									<Link to="/">Popular</Link>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>
				</div>
			</Drawer>
		</>
	)
}
