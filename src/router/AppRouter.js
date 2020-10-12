import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout, LoadingLayout } from '../components';

const HomePage = React.lazy(() => import("../pages/HomePage"));
const DetailPage = React.lazy(() => import("../pages/DetailPage"));
const SearchPage = React.lazy(() => import("../pages/SearchPage"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const MoviePage = React.lazy(() => import("../pages/MoviePage"));

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingLayout />}>
				<Layout>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/detail/:type/:id/" component={DetailPage} />
						<Route exact path="/search" component={SearchPage} />
						<Route exact path="/:type/:category" component={MoviePage} />
						<Route component={NotFound} />
					</Switch>
				</Layout>
			</Suspense>
		</BrowserRouter>
	)
}
