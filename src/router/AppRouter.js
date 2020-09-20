import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { loadGenres, loadPopularMovies, loadTrendingMovies, loadUpcomingMovies } from '../actions';
import { HomePage, MovieDetail } from '../pages';

export const AppRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadGenres());
		dispatch(loadPopularMovies());
		dispatch(loadTrendingMovies());
		dispatch(loadUpcomingMovies());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/movie/:slug" component={MovieDetail} />
			</Switch>
		</BrowserRouter>
	)
}
