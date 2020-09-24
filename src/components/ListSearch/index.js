import React from 'react';
import { Button, Card, CardContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getFullDate } from '../../helpers/dates';
import { loadSearch, loadSearchMovie, loadSearchTvShow } from '../../redux/actions/search';
import { useHistory } from 'react-router-dom';
import { slug } from '../../helpers';

import './styles.scss';

export const ListSearch = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { search, query, type } = useSelector(state => state.search);
    const hasMoreData = search.page !== search.total_pages;

    const handleLoadMore = () => {
        const nextPage = search.page + 1;
        if (type === "all") {
            dispatch(loadSearch(query, nextPage, true));
        }
        if (type === "movie") {
            dispatch(loadSearchMovie(query, nextPage, true));
        }
        if (type === "tv") {
            dispatch(loadSearchTvShow(query, nextPage, true));
        }
    }

    const goToDetail = (item) => () => {
        const typeMedia = item.media_type || type;
        const url = `/${type}/${slug(item.id + "-" + item.original_title)}`;
        history.push(url, { id: item.id, type: typeMedia });
    }

    return (
        <>
            <div className="list-search-container">
                {
                    search.results.map((item, idx) => (
                        <Card className="search-card" key={idx} onClick={goToDetail(item)}>
                            {(item.poster_path || item.backdrop_path) && <img className="search-img" src={`https://image.tmdb.org/t/p/original${item.poster_path || item.backdrop_path}`} alt={item.title} />}
                            <CardContent>
                                <h4>{item.title || item.original_name} {item.media_type && <span className="search-result-type"> - ({item.media_type})</span>}</h4>
                                <span>{getFullDate(item.release_date || item.first_air_date)}</span>
                                <p className="search-overview">{item.overview}</p>
                            </CardContent>
                        </Card>
                    ))
                }
                <Button variant="contained" fullWidth disabled={!hasMoreData} onClick={handleLoadMore}>Cargar más</Button>
            </div>
        </>
    )
}