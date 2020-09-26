import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppRouter } from './router';
import { store } from './redux';
import { theme } from './theme';

export const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<AppRouter />
			</ThemeProvider>
		</Provider>
	);
};


