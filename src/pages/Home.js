import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListMedia } from '../components/ListMedia';
import { loadPopularMovies, loadTrendingMovies, loadUpcomingMovies } from '../actions';
import { Search } from '../components';

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
			<Search />
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
