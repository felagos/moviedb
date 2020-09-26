import styled from 'styled-components';

export const Cover = styled.div`
    background-image: linear-gradient(to right, #032541 150px, rgba(40, 55, 36, 0.84) 100%);
`;

export const MediaPoster = styled.div`
    @media (max-width: 640px) {
        flex-direction: column !important;
        align-items: center;
    }

    display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 40px;

	img {
		border-radius: 4px;
		width: 200px;
		height: 300px;
	}
`;

export const Description = styled.div`
    @media (max-width: 640px) {
        padding: 10px 0 !important;
    }

    flex: 75;
	padding: 0 50px 50px;
`;

export const Title = styled.div`
    font-weight: 500;

    h2 {
        color: ${props => props.theme.colors.white};
		font-weight: bold;
    }
    
    span {
		color: ${props => props.theme.colors.white};
	}
`;

export const Overview = styled.div`
    color: ${props => props.theme.colors.white};
	padding-top: 20px;
`; 