import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const SphereContainer = styled.div`
    position: absolute;
    bottom: 5%;
    left: 21%;
    z-index: 2000;
    width: 60%;

    @media (min-width: 1200px) {
        width: 45%;
    }

    @media (min-width: 1500px) {
        width: 50%;
    }

    @media (orientation: landscape) and (max-width: 600px) {
        width: 35%;
        left: 35%;
    }
`

export const Sphere = () => (
    <SphereContainer>
        <StaticImage
            src="https://res.cloudinary.com/the-great-sync/image/upload/v1690136294/2000x2000/controllers_mtocnc.png"
            alt="A sphere containing an in ocean with some islands, and a submarine hovering over."
            placeholder="blurred"
        />
    </SphereContainer>
)

export default Sphere
