import styled from 'styled-components';
import { OutlinedInput } from '@material-ui/core';

export const SearchContainer = styled.div`
    @media (max-width: 710px) {
        padding: 10px !important;
        justify-content: center;
    }

    display: flex;
	flex-direction: column;
	padding: 65px;
	min-height: 300px;
	height: calc(100vh / 2.5);
	max-height: 360px;
	background-position: top center;
	background-size: cover;
	background-repeat: no-repeat;
    color: #fff;
    background-image: url("https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/5GISMqlRXMEyBrgEqyvhaMMuQmJ.jpg");
`;

export const Title = styled.div`
    color: ${props => props.theme.colors.white};

	& h2 {
		font-size: 3em;
		font-weight: 700;
		line-height: 1;
    }
    
`;

export const Subtitle = styled.h3`
    @media (max-width: 630px) {
        font-size: 1.5em !important;
    }

    font-size: 2em;
	font-weight: 600;
	margin: 0;
`;

export const InputSearch = styled(OutlinedInput)`
    width: 100%;
	height: 45px;
	border-radius: 100px;
	padding: 10px;
	outline: none;
	margin-top: 10px;
	background-color: ${props => props.theme.colors.white};

	&:focus {
		outline: none;
		border-color: inherit;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
`;