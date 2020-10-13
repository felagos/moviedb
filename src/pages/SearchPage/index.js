import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SearchInfo } from './components/SearchInfo';
import { ListSearch } from './components/ListSearch';
import { loadSearch } from '../../redux';
import { ResultContainer } from './styles';

export const SearchPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const params = new URLSearchParams(location.search);

	useEffect(() => {
		dispatch(loadSearch(params.get("query")));
	}, [dispatch, params]);

	return (
		<ResultContainer data-testid="search-page">
			<SearchInfo />
			<ListSearch />
		</ResultContainer>
	)
}

export default SearchPage;
