import React from 'react';
import PropTypes from 'prop-types';
import { castToMonthDay } from '../../helpers';

export const MediaCard = ({ item }) => {
	return (
		<div className="media-card">
			<img className="media-img-source" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.original_title} />
			<div className="media-card-content">
				<span className="media-title">{item.title}</span>
				<span className="media-date">{castToMonthDay(item.release_date)}</span>
			</div>
		</div>
	)
}

MediaCard.propTypes = {
	item: PropTypes.object.isRequired
};
