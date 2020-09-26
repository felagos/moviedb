import styled from 'styled-components';
import { Container } from '@material-ui/core';

export const Main = styled(Container)`
    @media (max-width: 1024px) {
        margin: 0 !important;
        padding: 0 !important;
    }

    display: flex;
    flex-direction: column;
`;

export const Footer = styled.div`
    padding-bottom: 50px;
`;