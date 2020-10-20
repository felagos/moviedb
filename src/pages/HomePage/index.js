import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPopularMovies, loadTrendingMovies, loadUpcomingMovies, setToken } from '../../redux';
import { Search } from './components/Search';
import { Sections } from './components/Sections';

const HomePage = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		document.title = "Movie App";
		dispatch(loadPopularMovies());
		dispatch(loadTrendingMovies());
		dispatch(loadUpcomingMovies());
	}, [dispatch]);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const token = params.get("request_token");
		const aprooved = params.get("approved");

		if(token && aprooved) {
			dispatch(setToken(token));
			window.history.replaceState(null, "", window.location.origin);
		}
		
	}, [dispatch]);

	return (
		<div data-testid="home-page">
			<Search />
			<Sections />
		</div>
	)
}

export default HomePage;
