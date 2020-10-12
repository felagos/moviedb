import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppRouter } from './router';
import { store } from './redux';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	);
};


