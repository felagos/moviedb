import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadMoreMediasByType, loadMediasByType } from '../../redux';
import { FlexContainer, GridList } from '../../components';
import { Button } from '@material-ui/core';

const MoviePage = () => {
    const [hasResults, setHasResults] = useState(false);

    let { type, category } = useParams();
    type = type.replace("-", "_");

    const { mediasTypes } = useSelector(state => state.media);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMediasByType(type, category));

    }, [dispatch, type, category]);

    useEffect(() => {
        setHasResults(mediasTypes?.results && mediasTypes?.results.length !== 0);
    }, [mediasTypes]);

    const handleLoadMoreData = () => {
        dispatch(loadMoreMediasByType(type, category, mediasTypes.page + 1));
    };

    console.log("mediasTypes", mediasTypes)

    return (
        <div data-testid="media-page">
            <FlexContainer direction="column">
                <GridList list={mediasTypes.results || []} type={type} />
                {hasResults && <Button variant="contained" onClick={handleLoadMoreData} fullWidth>Cargar más</Button>}
            </FlexContainer>
        </div>
    )
}

export default MoviePage;