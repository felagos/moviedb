import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, MediaDetailPage, SearchPage } from '../pages';
import { Layout } from '../components';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/:type/:id/" component={MediaDetailPage} />
					<Route exact path="search" component={SearchPage} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}
