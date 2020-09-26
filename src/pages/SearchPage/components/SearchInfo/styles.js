import styled from 'styled-components';
import { Chip, ListItem, List } from '@material-ui/core';

export const InfoContainer = styled.div`
    @media (max-width: 630px) {
        display: none !important;
    }

    padding-right: 10px;
    padding-left: 10px;
`;

export const InfoContainerResponsive = styled.div`
    @media (max-width: 630px) {
        display: flex !important;
        padding-left: 10px;
        width: 100%;
        overflow-x: scroll;
    }
    
    display: none;
`;

export const InfoHeader = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.ligthBlue};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    h4 {
        color: ${props => props.theme.colors.white};
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const Item = styled(ListItem)`
    @media (max-width: 630px) {
        font-weight: normal !important;
    }

    padding-top: 0 !important;
    padding-left: 0 !important;
`;

export const InfoType = styled.span`
    flex: 1;
    padding-left: 5px;
    font-weight: bold;
`;

export const Total = styled(Chip)`
    margin-top: 5px;
`;

export const ListInline = styled(List)`
    display: flex;
    width: 100%;
`;