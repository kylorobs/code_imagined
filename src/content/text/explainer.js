import React, {useContext} from 'react';
import styled from 'styled-components';
import {P, CallOut } from '../../components/UI/text.styled';
import {Button} from '../../components/UI/button.styled';
import { SignupContext } from '../../context/toggle';
import { H2 } from '../../components/UI/headings.styled';
import { Flex } from 'rebass/styled-components';

const TextContainer = styled.section `
    width: 70%;
    margin: auto;
    padding: 2em;
    margin-bottom: 1em;
    background-color:${props => props.theme.colors.navy};
    @media(max-width: 800px){
        padding: 1em;
        width: 80%;
    }
`

const Heading = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3em;

    div {
        padding: 2em;
        background-color: ${props => props.theme.colors.green};

         h2 {
            margin: 0;
        }
    }
`

const Explainer = () => {

    const showSignUp = useContext(SignupContext).show;

    return (
        <TextContainer>
            
            <Heading>
                <div>
                    <H2 center large>The Great Sync</H2>
                </div>
            </Heading>
            <P>Hi!</P>
                <P>I'm Kylo. I am a Javascript developer, and have been for many years. 
                    That said, I am not a guru. I have not worked for Google. 
                    I did not high five Ryan Dahl after helping create Node Js.</P>
                <P>What I can say is that I am someone who needed a way to 'level up' in Javascript.</P>
                <P>When I first started I threw myself into building things - anything and everything - as you should! 
                    As a visual learner, seeing my creations was incredibly satisfying.</P>
                <CallOut>
                    <P>Soon though, I began notice big gaps in my understanding. 
                    I still felt like I didn't have a full grasp of Javascript. I just couldn't fit all the pieces together.</P>
                </CallOut>
                <P>And that's when I began The Great Sync - a single, powerful resource which exposed the bare bones of Javascript,
                        all living in my imagination. It could be referred back to whenever I was stuck or confused.</P>
                <P>I have relied on it to grow my knowledge of the language, and have used it to coach many junior and apsiring devs. </P>
                <P>I would love for you to make it your own, to build it brick by brick, 
                    function invocation by function invocation, and create something in your mind that lasts forever.</P>
                <P> </P>
                <Flex justifyContent="center">
                    <Button center clicked={showSignUp}>Show me The Great Sync!</Button>
                </Flex>
        </TextContainer>
    )
}


export default Explainer

