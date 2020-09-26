import React from 'react';
import { useSelector } from 'react-redux';
import { ListMedia } from '../../../../components/ListMedia';
import { HomeSection } from './styles';


export const Sections = () => {

	const { popular, upcoming, trending } = useSelector(state => state.movie);

	return (
		<>
			<HomeSection>
				<ListMedia title="Popular" data={popular} type="movies" />
			</HomeSection>
			<HomeSection>
				<ListMedia title="Proximamente" data={upcoming} type="movies" />
			</HomeSection>
			<HomeSection>
				<ListMedia title="Tendencias" data={trending} type="movies" />
			</HomeSection>
		</>
	)
}
