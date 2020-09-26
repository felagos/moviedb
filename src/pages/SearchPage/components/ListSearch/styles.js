import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const ListContainer = styled.div`
    @media (max-width: 630px) {
        width: 100% !important;
    }

    flex-direction: row;
    width: 70vw;
    min-width: 0;
`;

export const CardResult = styled(Card)`
    cursor: pointer;
    display: flex;
    height: 200px;
    flex-direction: row;
    margin: 10px;
    box-shadow: 0px 0px 4px ${props => props.theme.colors.gray};
`;

export const Image = styled.img`
    width: 150px;
`;

export const Overview = styled.p`
    @media (max-width: 910px) {
        -webkit-line-clamp: 4 !important;
    }

    @media (max-width: 675px) {
        -webkit-line-clamp: 3 !important;
    }

    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    width: 100%;
    padding-top: 5px;
`;