import React from 'react';
import { ListChip } from '../ListChip';
import { Info, InfoSection, Title } from './styles';

export const MetaInfo = ({ title, status, languages, keywords }) => {
    return (
        <Info>
            <InfoSection>
                <Title>Título original</Title>
                <span>{title}</span>
            </InfoSection>

            <InfoSection>
                <Title>Estado</Title>
                <span>{status}</span>
            </InfoSection>

            {
                Array.isArray(languages) &&
                <InfoSection>
                    <Title>Idioma original</Title>
                    <span>{languages.map(language => language.name).join(" - ")}</span>
                </InfoSection>
            }

            {
                keywords && keywords?.length !== 0 &&
                <InfoSection>
                    <Title>Palabras claves</Title>
                    <ListChip chips={keywords} />
                </InfoSection>
            }
        </Info>
    )
}
