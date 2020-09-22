import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components';

const HomePage = React.lazy(() => import("../pages/HomePage"));
const MediaDetailPage = React.lazy(() => import("../pages/MediaDetailPage"));
const SearchPage = React.lazy(() => import("../pages/SearchPage"));

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={<h1>Loading...</h1>}>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/:type/:id/" component={MediaDetailPage} />
						<Route exact path="search" component={SearchPage} />
					</Switch>
				</Suspense>
			</Layout>
		</BrowserRouter>
	)
}
