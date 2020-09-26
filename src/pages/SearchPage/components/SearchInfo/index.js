import React, { useEffect, useState } from 'react';
import { Chip, List, ListItem, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearch, loadSearchMovie, loadSearchTvShow } from '../../../../redux/actions/search';
import { countMedias } from '../../../../helpers';

import './styles.scss';

export const SearchInfo = () => {
    const dispatch = useDispatch();
    const [totals, setTotals] = useState({ totalMovies: 0, totalTvShows: 0 });
    const { search, query, type } = useSelector(state => state.search);

    useEffect(() => {
        const totals = countMedias(search.results, type);
        setTotals(totals);
    }, [search.results, type]);

    const handleFilterType = (type) => () => {
        if (type === "all") {
            dispatch(loadSearch(query));
        }
        if (type === "movie") {
            dispatch(loadSearchMovie(query));
        }
        if (type === "tv") {
            dispatch(loadSearchTvShow(query));
        }
    }

    return (
        <>
            <div className="search-info-container">
                <div className="search-info-header">
                    <h4>Resultados de la búsqueda</h4>
                </div>
                <Paper elevation={1}>
                    <List>
                        <ListItem className="search-info-item" button onClick={handleFilterType("all")}>
                            <span className="search-info-type">Todos</span> <Chip className="search-info-type-total" label={totals.totalMovies + totals.totalTvShows} />
                        </ListItem>
                        <ListItem className="search-info-item" button onClick={handleFilterType("movie")}>
                            <span className="search-info-type">Peliculas</span> <Chip className="search-info-type-total" label={totals.totalMovies} />
                        </ListItem>
                        <ListItem button className="search-info-item" onClick={handleFilterType("tv")}>
                            <span className="search-info-type">TV Shows</span> <Chip className="search-info-type-total" label={totals.totalTvShows} />
                        </ListItem>
                    </List>
                </Paper>
            </div>
            <div className="search-info-container-mobile">
                <List className="search-info-inline">
                    <ListItem className="search-info-item" button onClick={handleFilterType("all")}>
                        <span className="search-info-type">Todos</span>
                    </ListItem>
                    <ListItem className="search-info-item" button onClick={handleFilterType("movie")}>
                        <span className="search-info-type">Peliculas</span>
                    </ListItem>
                    <ListItem className="search-info-item" button onClick={handleFilterType("tv")}>
                        <span className="search-info-type">TV Shows</span>
                    </ListItem>
                </List>
            </div>
        </>
    )
}
