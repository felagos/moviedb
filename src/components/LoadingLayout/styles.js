import styled from 'styled-components';

export const Loading = styled.div`
    display: flex;
	flex-direction: column;
	padding: 20px;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const Title = styled.h1`
    text-align: center;
    color: ${props => props.theme.colors.darkBlue};
`;