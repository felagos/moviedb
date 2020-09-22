import React from 'react';
import { Menu, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

export const MenuSelector = ({ anchorEl, open, handleClose, links }) => {
	return (
		<Menu
			anchorEl={anchorEl}
			keepMounted
			open={open}
			onClose={handleClose}
		>
			{
				links.map((link, idx) => (
					<MenuItem key={idx} onClick={handleClose}>
						<Link className="navbar-link" to={link.to}>{link.name}</Link>
					</MenuItem>
				))
			}
		</Menu>
	)
}

MenuSelector.propTypes = {
	anchorEl: PropType.object,
	open: PropType.bool.isRequired,
	handleClose: PropType.func.isRequired,
	links: PropType.arrayOf(PropType.shape({ to: PropType.string, name: PropType.string })).isRequired
};
