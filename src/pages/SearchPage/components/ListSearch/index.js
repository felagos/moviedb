import React from 'react';
import { Button, CardContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadSearch, loadSearchMovie, loadSearchTvShow } from '../../../../redux/actions/search';
import { slug, getFullDate } from '../../../../helpers';
import { ListContainer, CardResult, Image, Overview } from './styles';

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
        const url = `/${typeMedia}/${slug(item.id + "-" + (item.title || item.original_name))}`;
        history.push(url, { id: item.id, type: typeMedia });
    }

    return (
        <>
            <ListContainer>
                {
                    search.results.map((item, idx) => (
                        <CardResult key={idx} onClick={goToDetail(item)}>
                            {(item.poster_path || item.backdrop_path) && <Image src={`https://image.tmdb.org/t/p/original${item.poster_path || item.backdrop_path}`} alt={item.title} />}
                            <CardContent>
                                <h4>{item.title || item.original_name} {item.media_type && <span> - ({item.media_type})</span>}</h4>
                                <span>{getFullDate(item.release_date || item.first_air_date)}</span>
                                <Overview>{item.overview}</Overview>
                            </CardContent>
                        </CardResult>
                    ))
                }
                <Button variant="contained" fullWidth disabled={!hasMoreData} onClick={handleLoadMore}>Cargar más</Button>
            </ListContainer>
        </>
    )
}