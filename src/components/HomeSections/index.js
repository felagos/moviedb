import React from 'react';
import { useSelector } from 'react-redux';
import { ListMedia } from '../ListMedia';

import './styles.scss';

export const HomeSections = () => {

	const { popular, upcoming, trending } = useSelector(state => state.movie);

	return (
		<>
			<div className="home-section">
				<ListMedia title="Popular" data={popular} type="movies" />
			</div>
			<div className="home-section">
				<ListMedia title="Proximamente" data={upcoming} type="movies" />
			</div>
			<div className="home-section">
				<ListMedia title="Tendencias" data={trending} type="movies" />
			</div>
		</>
	)
}
