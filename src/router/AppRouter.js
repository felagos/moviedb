import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, MovieDetail } from '../pages';
import { Layout } from '../components';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/movie/:id" component={MovieDetail} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}
