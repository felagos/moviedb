import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadDetailMovie, clenActiveMovie, loadKeywordsMovie, loadRecommendationsMovie, loadRelatedVideos } from '../../redux';
import { getYear } from '../../helpers';
import { MetaInfo } from './components/MetaInfo';
import { Poster } from './components/Poster';
import { MediaRelated } from './components/MediaRelated';
import { DetailContainer, MediaSections } from './styles';

const DetailPage = () => {
	const { id: slug, type } = useParams();
	const id = slug.split("-")[0];

	const { active: item, keywords, recommendations, related } = useSelector(state => state.movie);
	const dispatch = useDispatch();

	const loadData = useCallback(
		(id, type) => {
			if (type === "movie") {
				dispatch(loadDetailMovie(id));
				dispatch(loadKeywordsMovie(id));
				dispatch(loadRecommendationsMovie(id));
				dispatch(loadRelatedVideos(id));
			}

		},
		[dispatch]
	)

	useEffect(() => {
		loadData(id, type);

		return () => {
			dispatch(clenActiveMovie());
		}

	}, [dispatch, id, loadData, type]);

	useEffect(() => {
		if (item) {
			document.title = `${item.title} (${getYear(item.release_date)})`;
		}
	}, [item]);


	if (item === null) return null;

	return (
		<DetailContainer>
			<Poster poster={item.poster_path} title={item.title} release={item.release_date} genres={item.genres} votes={item.vote_average} overview={item.overview} />
			<MediaSections>
				<MediaRelated recommendations={recommendations} related={related} />
				<MetaInfo title={item.original_title} status={item.status} languages={item.spoken_languages} keywords={keywords} />
			</MediaSections>
		</DetailContainer>
	)
}

export default DetailPage;
