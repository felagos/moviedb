import React from 'react';
import PropTypes from 'prop-types';
import { MediaCard } from '../MediaCard';

export const ListMedia = ({ media }) => {
	return (
		<div className="media-list-container">
			{
				media.map((item, idx) => (
					<MediaCard key={idx} item={item} />
				))
			}
		</div>
	)
}

ListMedia.propTypes = {
	media: PropTypes.arrayOf(PropTypes.object).isRequired
};
