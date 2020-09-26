import React from 'react';
import { ListChip } from '../ListChip';

export const MetaInfo = ({ title, status, languages, keywords }) => {
    return (
        <div className="media-movie-info">
            <div className="media-movie-info-part">
                <span className="media-title">Título original</span>
                <span>{title}</span>
            </div>

            <div className="media-movie-info-part">
                <span className="media-title">Estado</span>
                <span>{status}</span>
            </div>

            <div className="media-movie-info-part">
                <span className="media-title">Idioma original</span>
                <span>{languages.map(language => language.name).join(" - ")}</span>
            </div>

            {
                keywords.length !== 0 &&
                <div className="media-movie-info-part">
                    <span className="media-title">Palabras claves</span>
                    <ListChip chips={keywords} />
                </div>
            }
        </div>
    )
}
