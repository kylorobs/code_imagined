import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-awesome-reveal'
import Testimonial from './testimonial'

const testimonials = [
    {
        name: 'Daniel Healy',
        text: 'I was blown away by the effectiveness of his unique teaching method!',
        profile: 'https://pbs.twimg.com/profile_images/1352914223370670081/NMwbQrgI_400x400.jpg',
    },
    {
        name: '@ericaLynnCodes',
        profile: 'https://pbs.twimg.com/profile_images/1519020652149104642/WfPilMx8_400x400.jpg',
        text:
            'Kylo does an amazing job breaking down complex JavaScript syntax so it is simple and easy to understand.',
    },
]

const TestimonialGrid = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    margin: 2rem 1rem;
    padding: 0rem;
    grid-gap: 3rem;

    @media (min-width: 900px) {
        grid-gap: 3rem;
        grid-template-columns: 1fr 1fr;
        margin: 5rem 1rem;
        padding: 1rem;
    }
`

const Testimonials = () => (
    <TestimonialGrid>
        <Reveal cascade>
            {testimonials.map(tst => (
                <Testimonial key={`${tst.name}-key`} {...tst} />
            ))}
        </Reveal>
    </TestimonialGrid>
)

export default Testimonials
