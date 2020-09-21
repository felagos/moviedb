import React from 'react';
import PropTypes from 'prop-types';
import { MediaCard } from '../MediaCard';

export const ListMedia = ({ media, title }) => {

	return (
		<>
		<h2>{title}</h2>
		<div className="media-list-container">
			{
				media.map((item, idx) => (
					<MediaCard key={idx} item={item} />
				))
			}
		</div>
		</>

	)
}

ListMedia.propTypes = {
	media: PropTypes.arrayOf(PropTypes.object).isRequired
};
