import React from 'react';
import { Chip } from '@material-ui/core';

export const ListChip = ({ chips }) => {
	return (
		<div className="chips-cotainer">
			{
				chips.map((chip, idx) => (
					<Chip key={idx} label={chip.name} />
				))
			}
		</div>
	)
}
