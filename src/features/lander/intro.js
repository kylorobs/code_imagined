import React, { useContext } from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass/styled-components'
import { P, CallOut } from '../../components/UI/text.styled'
import { Button } from '../../components/UI/button.styled'
import { SignupContext } from '../../context/toggle'
import { H2 } from '../../components/UI/headings.styled'

const TextContainer = styled.section`
    width: 70%;
    max-width: 1000px;
    margin: auto;
    padding: 2em;
    margin-bottom: 1em;
    background: #000000bf;
    @media (max-width: 800px) {
        padding: 1em;
        width: 80%;
    }
`

export const Heading = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0;

    padding: 1em;

    h2 {
        margin: 0;
    }
`

const Intro = () => {
    const showSignUp = useContext(SignupContext).show

    return (
        <TextContainer>
            <Heading>
                <H2 center large>
                    Learn JavaScript
                    <br /> with The Great Sync
                </H2>
            </Heading>

            <P style={{ color: 'white' }}>Hi!</P>
            <P style={{ color: 'white' }}>
                I'm Kylo. I am a JavaScript developer, and have been for many years. That said, I am not a guru. I have
                not worked for Google.
            </P>
            <P style={{ color: 'white' }}>
                What I can say is that I am someone who needed a way to 'level up' in JavaScript.
            </P>
            <P style={{ color: 'white' }}>
                When I first started I threw myself into building things - anything and everything - as you should! As a
                visual learner, seeing my creations was incredibly satisfying.
            </P>
            <CallOut>
                <P>
                    Soon though, I began notice big gaps in my understanding. I still felt like I didn't have a full
                    grasp of Javascript fundamentals. I just couldn't fit all the pieces together.
                </P>
            </CallOut>
            <P style={{ color: 'white' }}>
                The truth? I still found javascript hard. There were some things I did not understand fully, or couldn't
                wrap my mind around at all.
            </P>
            <P style={{ color: 'white' }}>
                And that's when I began The Great Sync - a single, powerful resource which exposed the bare bones of
                JavaScript, all living in my imagination. It could be referred back to whenever I was stuck or confused.
                It broke down the difficult concepts, and tied everything together.
            </P>
            <P style={{ color: 'white' }}>
                I have relied on it to grow my knowledge of the language, and have used it to coach many junior and
                aspiring devs.
            </P>
            <P style={{ color: 'white' }}>
                I would love for you to make it your own, to build it brick by brick, function by function, and create a
                visual mental model of the language that lasts forever.
            </P>
            <P style={{ color: 'white' }}> </P>
            <Flex justifyContent="center" mt={4}>
                <Button center clicked={showSignUp} color="yellow">
                    Show me The Great Sync!
                </Button>
            </Flex>
        </TextContainer>
    )
}

export default Intro
