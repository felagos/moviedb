import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadMoreMediasByType, loadMediasByType } from '../../redux';
import { FlexContainer, GridList } from '../../components';
import { Button } from '@material-ui/core';

const MoviePage = () => {
    let { type, category } = useParams();
    type = type.replace("-", "_");

    const { mediasTypes } = useSelector(state => state.media);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMediasByType(type, category));

    }, [dispatch, type, category]);

    const handleLoadMoreData = () => {
        dispatch(loadMoreMediasByType(type, category, mediasTypes.page + 1));
    };

    return (
        <FlexContainer direction="column">
            <GridList list={mediasTypes.results} type={type} />
            {mediasTypes?.results.length !== 0 && <Button variant="contained" onClick={handleLoadMoreData} fullWidth>Cargar más</Button>}
        </FlexContainer>
    )
}

export default MoviePage;