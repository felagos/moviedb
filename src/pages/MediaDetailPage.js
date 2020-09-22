import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { useLocation } from 'react-router-dom';
import { loadDetailMovie, clenActiveMovie, loadKeywordsMovie, loadRecommendationsMovie, loadRelatedVideos } from '../redux';
import { getYear } from '../helpers';
import { ListChip, ListMedia } from '../components';
import { Divider } from '@material-ui/core';

export const MediaDetailPage = () => {
	const { state: { id, type } } = useLocation();
	const dispatch = useDispatch();
	const { active: item, keywords, recommendations, related } = useSelector(state => state.movie);

	useEffect(() => {
		dispatch(loadDetailMovie(id));
		dispatch(loadKeywordsMovie(id));
		dispatch(loadRecommendationsMovie(id));
		dispatch(loadRelatedVideos(id));

		return () => {
			dispatch(clenActiveMovie());
		}

	}, [dispatch, id]);

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

			<div className="media-movie-sections">
				<div className="media-movie-videos">
					<div className="media-movie-videos-section">
						<Divider />
						<ListMedia title="Recomendados" data={recommendations} type="movies" />
					</div>
					<div className="media-movie-videos-section">
						<Divider />
						<ListMedia title="Medias" data={related} type="iframes" />
					</div>
				</div>

				<div className="media-movie-info">
					<div className="media-movie-info-part">
						<span className="media-title">Título original</span>
						<span>{item.original_title}</span>
					</div>

					<div className="media-movie-info-part">
						<span className="media-title">Estado</span>
						<span>{item.status}</span>
					</div>

					<div className="media-movie-info-part">
						<span className="media-title">Idioma original</span>
						<span>{item.spoken_languages.map(language => language.name).join(" - ")}</span>
					</div>

					{
						keywords.length !== 0 &&
						<div className="media-movie-info-part">
							<span className="media-title">Palabras claves</span>
							<ListChip chips={keywords} />
						</div>
					}
				</div>
			</div>


		</div>
	)
}
