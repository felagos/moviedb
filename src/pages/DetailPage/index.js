import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadDetailMedia, cleanActiveMedia, loadKeywordsMedia, loadRecommendationsMedia, loadRelatedVideos } from '../../redux';
import { getYear } from '../../helpers';
import { MetaInfo } from './components/MetaInfo';
import { Poster } from './components/Poster';
import { MediaRelated } from './components/MediaRelated';
import { DetailContainer, MediaSections } from './styles';

const DetailPage = () => {
	const { id: slug, type } = useParams();
	const id = slug.split("-")[0];

	const { active: item, keywords, recommendations, related } = useSelector(state => state.media);
	const dispatch = useDispatch();

	const loadData = useCallback(
		(id, type) => {
			dispatch(loadDetailMedia(id, type));
			dispatch(loadKeywordsMedia(id, type));
			dispatch(loadRecommendationsMedia(id, type));
			dispatch(loadRelatedVideos(id, type));
		},
		[dispatch]
	)

	useEffect(() => {
		loadData(id, type);

		return () => {
			dispatch(cleanActiveMedia());
		}

	}, [dispatch, id, loadData, type]);

	useEffect(() => {
		if (item) {
			document.title = `${item.title} (${getYear(item.release_date || item.first_air_date)})`;
		}
	}, [item]);


	if (item === null) return null;

	return (
		<DetailContainer data-testid="detail-container">
			<Poster poster={item.poster_path} title={item.title || item.original_name} release={item.release_date || item.first_air_date} genres={item.genres} votes={item.vote_average} overview={item.overview} />
			<MediaSections>
				<MediaRelated recommendations={recommendations} related={related} />
				<MetaInfo title={item.original_title || item.original_name} status={item.status} languages={item.spoken_languages} keywords={keywords} />
			</MediaSections>
		</DetailContainer>
	)
}

export default DetailPage;
