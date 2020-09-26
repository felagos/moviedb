import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

export const Nav = styled(AppBar)`
    background-color: ${props => props.theme.colors.darkBlue} !important;
`;

export const ButtonMenu = styled(IconButton)`
    @media (min-width: 630px) {
        display: none !important;
    }

    @media (max-width: 630px) {
        display: block !important;
    }

    color: ${props => props.theme.colors.white} !important;
`;

export const HeaderLink = styled(Link)`
    color: ${props => props.theme.colors.white};

    &:hover {
        text-decoration: none;
        color: ${props => props.theme.colors.white};
    }
`;

export const LinkContainer = styled.div`
    @media (max-width: 630px) {
        display: none;
    }

    margin-left: 20px;
    flex: 80;
    
    button {
        margin-left: 10px;
		color: ${props => props.theme.colors.white};
	}
`;

export const ButtonAuth = styled.div`
    @media (max-width: 630px) {
        flex: 1;

        button {
            float: right;
        }
    }

    button {
		color: ${props => props.theme.colors.white} !important;
	}
`;