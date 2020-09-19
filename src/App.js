import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './router/app-router';
import { store } from './store';

export const App = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};


