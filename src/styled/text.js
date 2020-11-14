import styled from 'styled-components';

export const P  = styled.p`
    font-family: ${props => props.theme.fonts.par};
    color: ${props => props.theme.colors.white};
    font-size: 24px;
    padding: 0.5em 0;
    line-height: 33px;

    @media (max-width: 1100px){
        line-height: 28px;
    }

    @media (max-width: 900px){
        font-size: 20px;
        line-height: 28px;
    }

    @media (max-width: 800px){
        font-size: 18px;
        line-height: 26px;
    }
`