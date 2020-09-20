import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setActiveMovie } from '../actions';

export const MovieDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { active } = useSelector(state => state.movie);

	useEffect(() => {
		dispatch(setActiveMovie());
	}, [dispatch]);

	return (
		<div>

		</div>
	)
}
