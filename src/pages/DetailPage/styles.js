import styled from 'styled-components';

export const DetailContainer = styled.div`
    display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;

export const MediaSections = styled.div`
    @media (max-width: 1024px) {
        padding-left: 10px !important;
    }
    
    @media (max-width: 640px) {
        padding: 10px !important;
    }
    
    @media (max-width: 930px) {
        flex-direction: column !important;
    }

    display: flex;
	flex-direction: row;
`;