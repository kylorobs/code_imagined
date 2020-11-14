import React from 'react';
import island_svg from '../images/rain_island.svg';
import styled from 'styled-components';

const StyledSVG = styled(island_svg)`
    width: 100%;
    position: absolute;
    z-index: 100;
    right: 50px;

    @media (max-width: 1400px){
        width: 105%;
        top: 80px;
        right: 1px;
    }

    @media (max-width: 1100px){
        width: 110%;
        top: 80px;
        right: 1px;
    }

    @media(max-width: 600px){
        width: 95%;
        top: 30px;
        right: 1px;
    }

    .rain {}
    .shrubs{}
    .toilet_shrubs{}
    .puddle{}
    .frontright{}
    .frontleft{}
`

const island = () => (
    <StyledSVG />
)

export default island;