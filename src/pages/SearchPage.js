import { Chip, List, ListItem, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ListSearch } from '../components/ListSearch';
import { loadSearch } from '../redux';

export const SearchPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const params = new URLSearchParams(location.search);

	useEffect(() => {
		dispatch(loadSearch(params.get("query")));
	}, [dispatch, params]);

	const handleLoadMore = () => {
	}

	return (
		<div className="search-result-container">
			<div className="search-result">
				<div className="search-result-header">
					<h4>Resultados de la busqueda</h4>
				</div>
				<Paper elevation={1}>
					<List>
						<ListItem className="search-result-item" button><span className="search-result-type">Peliculas</span> <Chip label="1" /></ListItem>
						<ListItem button className="search-result-item"><span className="search-result-type">TV Shows</span> <Chip label="1" /></ListItem>
					</List>
				</Paper>
			</div>
			<ListSearch handleLoadMore={handleLoadMore} />
		</div>
	)
}

export default SearchPage;
