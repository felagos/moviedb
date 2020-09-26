import styled from 'styled-components';
import { Chip } from '@material-ui/core';

export const ChipContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
`;

export const ChipItem = styled(Chip)`
    margin: 5px;
`;