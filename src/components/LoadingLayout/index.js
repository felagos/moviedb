import React from 'react';
import { CircularProgress } from '@material-ui/core';

import "./styles.scss";

export const LoadingLayout = () => {
	return (
		<div className="loading-container">
			<CircularProgress className="loading-circle" size={80} />
			<h1 className="loading-text">Cargando página, por favor espere ...</h1>
		</div>
	)
}
