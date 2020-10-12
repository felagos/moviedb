import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { castToMonthDay, slug } from '../../helpers';
import { Card, Title, CardContent, Image } from './styles';

export const MediaCard = React.memo(
	({ item }) => {
		const history = useHistory();

		const goToDetail = () => {
			const type = item.seasons ? "tv" : "movie";
			const url = `/detail/${type}/${slug(item.id + "-" + (item.title || item.original_name))}`;
			history.push(url, { id: item.id, type });
		};

		return (
			<Card data-testid="card-media" onClick={goToDetail}>
				<Image loading="lazy" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.original_title} />
				<CardContent>
					<Title>{item.title}</Title>
					<span>{castToMonthDay(item.release_date)}</span>
				</CardContent>
			</Card>
		)
	}
);

MediaCard.propTypes = {
	item: PropTypes.object.isRequired
};
