import { Button, Card, CardContent } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getFullDate } from '../../helpers/dates';

import './styles.scss';

export const ListSearch = ({ handleLoadMore }) => {
    const { search } = useSelector(state => state.search);
    const hasMoreData = search.page !== search.total_pages;

    return (
        <>
            <div className="list-search-container">
                {
                    search.results.map((item, idx) => (
                        <Card className="search-card" key={idx}>
                            {(item.poster_path || item.backdrop_path) && <img className="search-img" src={`https://image.tmdb.org/t/p/original${item.poster_path || item.backdrop_path}`} alt={item.title} />}
                            <CardContent>
                                <h4>{item.title || item.original_name} - <span className="search-result-type">({item.media_type})</span></h4>
                                <span>{getFullDate(item.release_date)}</span>
                                <p>{item.overview}</p>
                            </CardContent>
                        </Card>
                    ))
                }
                <Button variant="contained" fullWidth disabled={!hasMoreData} onClick={handleLoadMore}>Cargar más</Button>
            </div>
        </>
    )
}

ListSearch.propType = {
    handleLoadMore: PropTypes.func.isRequired
}