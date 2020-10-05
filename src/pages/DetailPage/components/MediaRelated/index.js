import React from 'react';
import { Divider } from '@material-ui/core';
import { ListMedia } from '../../../../components';
import { RelatedContainer, RelatedSection } from './styles';

export const MediaRelated = ({ recommendations, related }) => {
    return (
        <RelatedContainer>
            {
                recommendations.length !== 0 &&
                <RelatedSection>
                    <Divider />
                    <ListMedia title="Recomendados" data={recommendations} type="movies" />
                </RelatedSection>
            }
            {
                related.length !== 0 &&
                <RelatedSection>
                    <Divider />
                    <ListMedia title="Trailers" data={related} type="iframes" />
                </RelatedSection>
            }
        </RelatedContainer>
    )
}
