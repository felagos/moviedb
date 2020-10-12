import styled from 'styled-components';

export const Card = styled.div`
    padding: 10px;
`;

export const Image = styled.img`
    height: 225px;
    width: 150px;
	border-radius: 8px;

    &:hover {
        box-shadow: 0 0 10px black;
    }
`;

export const CardContent = styled.div`
    display: flex;
	flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 500;
`;