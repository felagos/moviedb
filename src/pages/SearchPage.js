import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadSearch } from '../redux';

export const SearchPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const params = new URLSearchParams(location.search);

	useEffect(() => {
		dispatch(loadSearch(params.get("query")));
	}, [dispatch, params]);

	return (
		<div>

		</div>
	)
}

export default SearchPage;
