import React from 'react';
import { Chip } from '@material-ui/core';

export const ListChip = React.memo(
	({ chips }) => {
		return (
			<div className="chip-container">
				{
					chips.map((chip, idx) => (
						<Chip className="chip-item" key={idx} label={chip.name} />
					))
				}
			</div>
		)
	}
);
