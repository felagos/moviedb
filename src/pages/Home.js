import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListMedia } from '../components/ListMedia';
import { loadPopularMovies, loadTrendingMovies, loadUpcomingMovies } from '../actions';

export const HomePage = () => {

	const dispatch = useDispatch();
	const { popular, upcoming, trending } = useSelector(state => state.movie);

	useEffect(() => {
		dispatch(loadPopularMovies());
		dispatch(loadTrendingMovies());
		dispatch(loadUpcomingMovies());
	}, [dispatch]);

	return (
		<>
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
		</>
	)
}
