import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { setActiveMovie } from '../actions';

export const MovieDetail = () => {
	const { state } = useLocation();

	return (
		<div>

		</div>
	)
}
