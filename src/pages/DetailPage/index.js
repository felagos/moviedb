import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadDetailMovie, clenActiveMovie, loadKeywordsMovie, loadRecommendationsMovie, loadRelatedVideos } from '../../redux';
import { getYear } from '../../helpers';
import { MetaInfo } from './components/MetaInfo';
import { Poster } from './components/Poster';
import { MediaRelated } from './components/MediaRelated';

const DetailPage = () => {
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
			<Poster poster={item.poster_path} title={item.title} release={item.release_date} genres={item.genres} votes={item.vote_average} overview={item.overview} />
			<div className="media-movie-sections">
				<MediaRelated recommendations={recommendations} related={related} />
				<MetaInfo title={item.original_title} status={item.status} languages={item.spoken_languages} keywords={keywords} /> 
			</div>
		</div>
	)
}

export default DetailPage;
