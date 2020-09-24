import React from 'react';
import { Drawer, ListItem, Typography, List, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

import './styles.scss';

export const Sidebar = ({ open, handleClose }) => {
	return (
		<Drawer anchor="left" open={open} onClose={handleClose}>
			<div className="drawer-container">
				<Accordion className="drawer-accordion">
					<AccordionSummary expandIcon={<ExpandMoreIcon className="accordion-icon" />}>
						<Typography className="accordion-title">Películas</Typography>
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

				<Accordion className="drawer-accordion">
					<AccordionSummary expandIcon={<ExpandMoreIcon className="accordion-icon" />}>
						<Typography className="accordion-title">TV Show</Typography>
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

				<Accordion className="drawer-accordion">
					<AccordionSummary expandIcon={<ExpandMoreIcon className="accordion-icon" />}>
						<Typography className="accordion-title">Personas</Typography>
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
	)
}
