import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPopularMovies, loadTrendingMovies, loadUpcomingMovies } from '../redux';
import { HomeSections, Search } from '../components';

const HomePage = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadPopularMovies());
		dispatch(loadTrendingMovies());
		dispatch(loadUpcomingMovies());
	}, [dispatch]);

	return (
		<>
			<Search />
			<HomeSections />
		</>
	)
}

export default HomePage;
