import React from 'react';
import { Drawer, ListItem, List, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DrawerContainer, Title, ExpandIcon, AccordionContainer } from './styles';


export const Sidebar = ({ open, handleClose }) => {
	return (
		<Drawer data-testid="drawer" anchor="left" open={open} onClose={handleClose}>
			<DrawerContainer>
				<AccordionContainer>
					<AccordionSummary expandIcon={<ExpandIcon />}>
						<Title>Películas</Title>
					</AccordionSummary>
					<AccordionDetails>
						<List>
							<ListItem>
								<Link to="/movie/popular" onClick={handleClose}>Popular</Link>
							</ListItem>
							<ListItem>
								<Link to="/movie/popular" onClick={handleClose}>Proximamente</Link>
							</ListItem>
							<ListItem>
								<Link to="/movie/top-rated" onClick={handleClose}>Lo más valorado</Link>
							</ListItem>
						</List>
					</AccordionDetails>
				</AccordionContainer>

				<AccordionContainer>
					<AccordionSummary expandIcon={<ExpandIcon />}>
						<Title>TV Show</Title>
					</AccordionSummary>
					<AccordionDetails>
						<List>
							<ListItem>
								<Link to="/tv/popular" onClick={handleClose}>Popular</Link>
							</ListItem>
							<ListItem>
								<Link to="/tv/on_the_air" onClick={handleClose}>On TV</Link>
							</ListItem>
							<ListItem>
								<Link to="/tv/top-rated" onClick={handleClose}>Lo más valorado</Link>
							</ListItem>
						</List>
					</AccordionDetails>
				</AccordionContainer>

				<AccordionContainer>
					<AccordionSummary expandIcon={<ExpandIcon />}>
						<Title>Personas</Title>
					</AccordionSummary>
					<AccordionDetails>
						<List>
							<ListItem>
								<Link to="/">Popular</Link>
							</ListItem>
						</List>
					</AccordionDetails>
				</AccordionContainer>
			</DrawerContainer>
		</Drawer>
	)
}
