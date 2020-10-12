import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuLink = styled(Link)`
    color: ${props => props.theme.colors.black};

    :hover {
        color: ${props => props.theme.colors.black};
        text-decoration: none;
    }
`;