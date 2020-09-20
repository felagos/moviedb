import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, MovieDetail } from '../pages';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/movie/:id" component={MovieDetail} />
			</Switch>
		</BrowserRouter>
	)
}
