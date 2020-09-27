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
				</AccordionContainer>

				<AccordionContainer>
					<AccordionSummary expandIcon={<ExpandIcon />}>
						<Title>TV Show</Title>
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
