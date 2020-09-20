import React from 'react';
import PropTypes from 'prop-types';
import { castToMonthDay } from '../../helpers';
import { useHistory, useLocation } from 'react-router-dom';

export const MediaCard = ({ item }) => {

	const history = useHistory();

	const goToDetail = () => {
		history.push(`/movie/${item.id}`);
	};

	return (
		<div className="media-card" onClick={goToDetail}>
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
