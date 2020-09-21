import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { useLocation } from 'react-router-dom';
import { loadDetailMovie, clenActiveMovie, loadKeywordsMovie, loadRecommendationsMovie, loadRelatedVideos } from '../actions/movies';
import { getYear } from '../helpers';
import { ListMedia } from '../components/ListMedia';
import { Divider } from '@material-ui/core';

export const MovieDetail = () => {
	const { state } = useLocation();
	const dispatch = useDispatch();
	const { active: item, keywords, recommendations, related } = useSelector(state => state.movie);

	useEffect(() => {
		dispatch(loadDetailMovie(state.id));
		dispatch(loadKeywordsMovie(state.id));
		dispatch(loadRecommendationsMovie(state.id));
		dispatch(loadRelatedVideos(state.id));

		return () => {
			dispatch(clenActiveMovie());
		}

	}, [dispatch, state.id]);

	useEffect(() => {
		if (item) {
			document.title = `${item.title} (${getYear(item.release_date)})`;
		}
	}, [item]);

	if (item === null) return null;

	return (
		<div className="media-movie-container">
			<div className="media-cover">
				<div className="media-poster">
					<img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
					<div className="media-description">
						<div className="media-title">
							<h2>{item.title} ({getYear(item.release_date)})</h2>
							<span>{item.genres.map(genre => genre.name).join(" - ")}</span>
						</div>
						<Rating name="read-only" value={item.vote_average} precision={0.5} max={10} readOnly />
						<div className="media-overview">
							<h2>Resumen</h2>
							<p>{item.overview}</p>
						</div>
					</div>
				</div>
			</div>

			<div className="media-movie-recommendations">
				<Divider />
				<ListMedia title="Recomendados" media={recommendations} />
			</div>

		</div>
	)
}
