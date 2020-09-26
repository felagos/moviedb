import React from 'react';
import { Divider } from '@material-ui/core';
import { ListMedia } from '../../../../components';

export const MediaRelated = ({ recommendations, related }) => {
    return (
        <div className="media-movie-videos">
            <div className="media-movie-videos-section">
                <Divider />
                <ListMedia title="Recomendados" data={recommendations} type="movies" />
            </div>
            <div className="media-movie-videos-section">
                <Divider />
                <ListMedia title="Medias" data={related} type="iframes" />
            </div>
        </div>
    )
}
