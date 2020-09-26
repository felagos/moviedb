import React, { useEffect, useState } from 'react';
import { List, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearch, loadSearchMovie, loadSearchTvShow } from '../../../../redux/actions/search';
import { countMedias } from '../../../../helpers';
import { InfoContainer, InfoHeader, Item, InfoType, Total, InfoContainerResponsive, ListInline } from './styles';

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
            <InfoContainer>
                <InfoHeader>
                    <h4>Resultados de la búsqueda</h4>
                </InfoHeader>
                <Paper elevation={1}>
                    <List>
                        <Item button onClick={handleFilterType("all")}>
                            <InfoType>Todos</InfoType> <Total label={totals.totalMovies + totals.totalTvShows} />
                        </Item>
                        <Item button onClick={handleFilterType("movie")}>
                            <InfoType>Peliculas</InfoType> <Total label={totals.totalMovies} />
                        </Item>
                        <Item button onClick={handleFilterType("tv")}>
                            <InfoType>TV Shows</InfoType> <Total label={totals.totalTvShows} />
                        </Item>
                    </List>
                </Paper>
            </InfoContainer>
            <InfoContainerResponsive>
                <ListInline>
                    <Item button onClick={handleFilterType("all")}>
                        <InfoType>Todos</InfoType>
                    </Item>
                    <Item button onClick={handleFilterType("movie")}>
                        <InfoType>Peliculas</InfoType>
                    </Item>
                    <Item button onClick={handleFilterType("tv")}>
                        <InfoType>TV Shows</InfoType>
                    </Item>
                </ListInline>
            </InfoContainerResponsive>
        </>
    )
}
