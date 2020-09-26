import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { getYear } from '../../../../helpers';
import { Cover, MediaPoster, Description, Title, Overview } from './styles';

export const Poster = ({ poster, title, genres, votes, overview, release }) => {
    return (
        <Cover>
            <MediaPoster>
                <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="" />
                <Description>
                    <Title>
                        <h2>{title} ({getYear(release)})</h2>
                        <span>{genres.map(genre => genre.name).join(" - ")}</span>
                    </Title>
                    <Rating name="read-only" value={votes} precision={0.5} max={10} readOnly />
                    <Overview>
                        <h2>Resumen</h2>
                        <p>{overview}</p>
                    </Overview>
                </Description>
            </MediaPoster>
        </Cover>
    )
}
