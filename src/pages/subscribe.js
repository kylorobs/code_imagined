import React from 'react'
import '../utils/fontawesome'
import Providers from '../providers/Providers'
import PageTitle from '../components/UI/pageTitle.styled'
import SignUp from '../features/signup/signup'
import { TextContainer } from '../components/layout/containers/textContainer'
import SignUpContainerButton from '../features/signup/signUpContainerButton'
import SEO from '../layout/seo'
// import Form from "../components/UI/signup-form";

const Subscribe = () => {
    return (
        <>
            <SEO
                title="The Syncer Program waiting list"
                description="The Syncer Program only opens a few times a year. Subscribe and join the waiting list so you are the first to know when it opens."
            />
            <Providers>
                <PageTitle postTitle>Join the waiting list for The Syncer Program</PageTitle>
                <TextContainer>
                    <p>
                        You will be the first to know when doors open once more. In the meantime I will send a taster of
                        The Great Sync.
                    </p>
                    {/* <SignUpContainerButton /> */}
                    <SignUp layout="plain" />
                    {/* <Form /> */}
                </TextContainer>
                {/* <SignUp /> */}
            </Providers>
        </>
    )
}

export default Subscribe
