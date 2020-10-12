import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadMoreMoviesByType, loadMoviesByType } from '../../redux';
import { FlexContainer, GridList } from '../../components';
import { Button } from '@material-ui/core';

const MoviePage = () => {
    let { type } = useParams();
    type = type.replace("-", "_");

    const { moviesTypes } = useSelector(state => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMoviesByType(type));
    }, [dispatch, type]);

    const handleLoadMoreData = () => {
        dispatch(loadMoreMoviesByType(type, moviesTypes.page + 1));
    };

    return (
        <FlexContainer direction="column">
            <GridList list={moviesTypes.results} />
            {moviesTypes?.results.length !== 0 && <Button variant="contained" onClick={handleLoadMoreData} fullWidth>Cargar más</Button>}
        </FlexContainer>
    )
}

export default MoviePage;