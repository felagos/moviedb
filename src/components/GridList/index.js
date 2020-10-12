import React from 'react';
import { Grid } from '@material-ui/core';
import { MediaCard } from '../MediaCard';
import { GridItem, GridContainer } from './styles';

export const GridList = ({ list }) => {

    return (
        <GridContainer container spacing={1}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={5}>
                    {
                        list.map((item, idx) => (
                            <GridItem key={idx} item>
                                <MediaCard item={item} />
                            </GridItem>
                        ))
                    }
                </Grid>
            </Grid>
        </GridContainer>
    )
}
