import React from 'react';
import { Container } from './styles';

export const FlexContainer = ({children, direction = "column"}) => {
    return (
        <Container direction={direction}>
            {children}
        </Container>
    )
}
