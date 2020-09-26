import styled from 'styled-components';
import { Accordion, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const DrawerContainer = styled.div`
    background-color: ${props => props.theme.colors.darkBlue} !important;
    color: ${props => props.theme.colors.white};
    height: 100%;
    width: 200px;
`;

export const Title = styled(Typography)`
    color: ${props => props.theme.colors.white};
`;

export const ExpandIcon = styled(ExpandMoreIcon)`
    color: ${props => props.theme.colors.white};
`;

export const AccordionContainer = styled(Accordion)`
    background-color: ${props => props.theme.colors.darkBlue} !important;

    a {
        color: ${props => props.theme.colors.white};
        text-decoration: none;
    }
`;