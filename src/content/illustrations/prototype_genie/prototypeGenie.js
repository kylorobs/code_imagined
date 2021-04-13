import React, { useEffect, useRef } from 'react';
import prototype_svg from '../../../images/prototype_c.svg';
import styled from 'styled-components';
import gsap from "gsap";
import withAnimationContext from '../../../hoc/withAnimationContext';
import withAnimateOnScroll from '../../../hoc/withAnimateOnScroll';



const StyledSVG = styled(prototype_svg)`
    width: 105%;
  
    position: absolute;
    z-index: 10;
    bottom: 0px;
    right: 0;

    @media (max-width: 1400px){
        width: 120%;
    }

    @media (max-width: 1200px){
        width: 135%;
    }

    @media (max-width: 1000px){
        width: 150%;
    }


    @media (max-width: 700px){
        width: 140%;
    }

    @media (max-width: 600px){
        width: 80%;
    }

    @media (max-width: 600px) and (min-height: 700px){
        width: 60%;
    } 

    @media (max-width: 480px) and (min-height: 700px){
        width: 80%;
    }

    .genie {}
    .beam{}
    .eyebrow1
    .eyebrow2
    .hair{}
`

const PrototypeGenie = (props) => {

    let refo = useRef(null);

    const moveBeam = (beam) => {
        gsap.set(beam, {transformOrigin: '95% 3%'})
        const tl = gsap.timeline();
        tl.addLabel("start")
        tl.to(beam, {
            rotate: 70, 
            duration: 4,
            ease: 'power2.easeOut'
        });
        tl.to(beam, {
            rotate: 40, 
            duration: 6,
            ease: 'power2.easeOut'
        });
        return tl;
    }

    useEffect(() => {
        const beam = refo.querySelector('#beam');
        props.tl.add(moveBeam(beam));
    });

    return (
        <div ref={(el) => (refo = el)}>
            <StyledSVG  />
        </div>
    )
};

export default withAnimateOnScroll(withAnimationContext(PrototypeGenie, true), true);