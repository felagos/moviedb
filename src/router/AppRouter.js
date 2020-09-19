import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGenres } from '../actions';

export const AppRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadGenres());
	}, [dispatch]);

	return (
		<>
		</>
	)
}
