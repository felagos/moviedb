import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { getYear } from '../../../../helpers';

export const Poster = ({ poster, title, genres, votes, overview, release }) => {
    return (
        <div className="media-cover">
            <div className="media-poster">
                <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="" />
                <div className="media-description">
                    <div className="media-title">
                        <h2>{title} ({getYear(release)})</h2>
                        <span>{genres.map(genre => genre.name).join(" - ")}</span>
                    </div>
                    <Rating name="read-only" value={votes} precision={0.5} max={10} readOnly />
                    <div className="media-overview">
                        <h2>Resumen</h2>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
