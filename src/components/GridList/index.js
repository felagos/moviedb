import React from 'react';
import { Grid } from '@material-ui/core';
import { MediaCard } from '../MediaCard';
import { GridItem, GridContainer } from './styles';

export const GridList = ({ list, type }) => {

    return (
        <GridContainer container>
            <Grid item xs={12}>
                <Grid container justify="center">
                    {
                        list.map((item, idx) => (
                            <GridItem key={idx} item>
                                <MediaCard item={item} type={type} />
                            </GridItem>
                        ))
                    }
                    {list.length === 0 && <h2>No se encontraron resultados</h2>}
                </Grid>
            </Grid>
        </GridContainer>
    )
}
