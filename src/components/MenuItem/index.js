import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import PropType from 'prop-types';
import { MenuLink } from './styles';

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
						<MenuLink to={link.to}>{link.name}</MenuLink>
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
