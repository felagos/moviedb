import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './router';
import { store } from './redux';

export const App = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};


