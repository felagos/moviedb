import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SearchInfo } from '../components';
import { ListSearch } from '../components/ListSearch';
import { loadSearch } from '../redux';

export const SearchPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const params = new URLSearchParams(location.search);

	useEffect(() => {
		dispatch(loadSearch(params.get("query")));
	}, [dispatch, params]);

	return (
		<div className="search-result-container">
			<SearchInfo />
			<ListSearch />
		</div>
	)
}

export default SearchPage;
