import React from 'react';
import PropTypes from 'prop-types';
import { castToMonthDay, slug } from '../../helpers';
import { useHistory } from 'react-router-dom';

export const MediaCard = React.memo(
	({ item }) => {
		const history = useHistory();

		const goToDetail = () => {
			const type = item.seasons ? "tv" : "movie";
			console.log(item);
			const url = `/${type}/${slug(item.id + "-" + (item.title || item.original_name))}`;
			history.push(url, { id: item.id, type });
		};

		return (
			<div className="media-card" onClick={goToDetail}>
				<img loading="lazy" className="media-img-source" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.original_title} />
				<div className="media-card-content">
					<span className="media-title">{item.title}</span>
					<span className="media-date">{castToMonthDay(item.release_date)}</span>
				</div>
			</div>
		)
	}
);

MediaCard.propTypes = {
	item: PropTypes.object.isRequired
};
