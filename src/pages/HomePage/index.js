import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPopularMovies, loadTrendingMovies, loadUpcomingMovies } from '../../redux';
import {Search} from './components/Search';
import { Sections } from './components/Sections';

const HomePage = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		document.title = "Movie App";
		dispatch(loadPopularMovies());
		dispatch(loadTrendingMovies());
		dispatch(loadUpcomingMovies());
	}, [dispatch]);

	return (
		<>
			<Search />
			<Sections />
		</>
	)
}

export default HomePage;
