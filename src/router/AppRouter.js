import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { loadGenres } from '../actions';
import { HomePage } from '../pages';

export const AppRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadGenres());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</BrowserRouter>
	)
}
