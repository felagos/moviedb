import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout, LoadingLayout } from '../components';

const HomePage = React.lazy(() => import("../pages/HomePage"));
const MediaDetailPage = React.lazy(() => import("../pages/MediaDetailPage"));
const SearchPage = React.lazy(() => import("../pages/SearchPage"));

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingLayout />}>
				<Layout>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/:type/:id/" component={MediaDetailPage} />
						<Route exact path="/search" component={SearchPage} />
					</Switch>
				</Layout>
			</Suspense>
		</BrowserRouter>
	)
}
