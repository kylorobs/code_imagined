import React from 'react';
import { StaticImage } from "gatsby-plugin-image";


const Rock = ({ size }) => {
    
    if (size === '4x'){
        return (
            <StaticImage
            src="../../../images/bigrock.png"
            alt="A floating rock"
            placeholder="tracedSVG"
            fullWidth
        />
        )
    }

    else if (size === '3x'){
        return (
            <StaticImage
            src="../../../images/mediumrock.png"
            alt="A floating rock"
            placeholder="tracedSVG"
            fullWidth
        />
        )
    }

    else if (size === '2x'){
        return (
            <StaticImage
            src="../../../images/smallrock.png"
            alt="A floating rock"
            placeholder="tracedSVG"
            fullWidth
        />
        )
    }

    else if (size === '1x'){
        return (
            <StaticImage
            src="../../../images/vsmallrock.png"
            alt="A floating rock"
            placeholder="tracedSVG"
            fullWidth
        />
        )
    }
    else return null;
};

export default Rock;
