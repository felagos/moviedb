import React from 'react';
import { ChipContainer, ChipItem } from './styles';

export const ListChip = React.memo(
	({ chips }) => {
		return (
			<ChipContainer>
				{
					chips.map((chip, idx) => (
						<ChipItem key={idx} label={chip.name} />
					))
				}
			</ChipContainer>
		)
	}
);
