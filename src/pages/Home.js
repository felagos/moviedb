import React from 'react';
import { useSelector } from 'react-redux';
import { HomeLayout } from '../components/HomeLayout';
import { ListMedia } from '../components/ListMedia';

export const HomePage = () => {

	const { popular, upcoming, trending } = useSelector(state => state.movie);

	return (
		<HomeLayout>
			<div className="home-section">
				<h2>Popular</h2>
				<ListMedia media={popular} />
			</div>
			<div className="home-section">
				<h2>Proximamente</h2>
				<ListMedia media={upcoming} />
			</div>
			<div className="home-section">
				<h2>Tendencias</h2>
				<ListMedia media={trending} />
			</div>
		</HomeLayout>
	)
}
