import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Loading, Title } from './styles';

export const LoadingLayout = () => {
	return (
		<Loading>
			<CircularProgress className="loading-circle" size={80} />
			<Title>Cargando página, por favor espere ...</Title>
		</Loading>
	)
}
