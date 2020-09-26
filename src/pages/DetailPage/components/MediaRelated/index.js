import React from 'react';
import { Divider } from '@material-ui/core';
import { ListMedia } from '../../../../components';
import { RelatedContainer, RelatedSection } from './styles';

export const MediaRelated = ({ recommendations, related }) => {
    return (
        <RelatedContainer>
            <RelatedSection>
                <Divider />
                <ListMedia title="Recomendados" data={recommendations} type="movies" />
            </RelatedSection>
            <RelatedSection>
                <Divider />
                <ListMedia title="Medias" data={related} type="iframes" />
            </RelatedSection>
        </RelatedContainer>
    )
}
