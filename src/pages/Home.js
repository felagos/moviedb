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
				<ListMedia title="Popular" media={popular} />
			</div>
			<div className="home-section">
				<ListMedia title="Proximamente" media={upcoming} />
			</div>
			<div className="home-section">
				<ListMedia title="Tendencias" media={trending} />
			</div>
		</>
	)
}
