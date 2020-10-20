import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadPopularMovies, loadTrendingMovies, loadUpcomingMovies, setToken } from '../../redux';
import { Search } from './components/Search';
import { Sections } from './components/Sections';

const HomePage = () => {

	const dispatch = useDispatch();
	const location = useLocation();

	const loadData = useCallback(() => {
		dispatch(loadPopularMovies());
		dispatch(loadTrendingMovies());
		dispatch(loadUpcomingMovies());
	}, [dispatch]);

	const handleSession = useCallback(() => {
		const params = new URLSearchParams(location.search);
		const token = params.get("request_token");
		const aprooved = params.get("approved");

		if (token && aprooved) {
			dispatch(setToken(token));
		}
		
		window.history.replaceState(null, "", window.location.origin);

	}, [dispatch, location.search]);

	useEffect(() => {
		document.title = "Movie App";
		loadData();
		handleSession();
	}, [loadData, handleSession]);

	return (
		<div data-testid="home-page">
			<Search />
			<Sections />
		</div>
	)
}

export default HomePage;
