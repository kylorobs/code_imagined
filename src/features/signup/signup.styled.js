import React, { useState } from 'react'
import { Flex, Box } from 'rebass/styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Modal from '../../components/UI/modal.styled'
import FormResult from './signup-result'
import Form from './signup-form'
import MageFunk from '../lander/imageBlocks/mage/mage'

const SignUp = () => {
    const [formStatus, setFormStatus] = useState({
        formSubmitted: false,
        loading: false,
        submitHeading: '',
        submitMessage: '',
    })

    const createErrorMessage = str => {
        if (str.includes('already subscribed')) return 'Looks like you are already subscribed!'
        return str
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setFormStatus({
            ...formStatus,
            loading: true,
            formSubmitted: true,
            submitHeading: '',
            submitMessage: 'Performing some functional javascript magic🧙...',
        })

        const first = e.target.elements.fname.value.trim()
        const surname = e.target.elements.sname.value.trim()
        const email = e.target.elements.email.value.trim()
        const { honey } = e.target.elements.email

        if (honey) return

        try {
            const response = await addToMailchimp(email, { FNAME: first, LNAME: surname })

            setFormStatus({
                submitHeading: response.result === 'success' ? `You're almost done, ${first}!` : 'Oh no! 😧',
                loading: false,
                formSubmitted: true,
                submitMessage:
                    response.result === 'success'
                        ? 'One last step to go! Please check your emails and confirm 🔥🔥🔥'
                        : createErrorMessage(response.msg),
            })
        } catch (e) {
            setFormStatus({
                submitHeading: 'Oh no! 😧',
                loading: false,
                formSubmitted: true,
                submitMessage:
                    'There seems to be an error. Please try submit the form again or try a different browser.',
            })
        }
    }

    const exitSignup = () => {
        setFormStatus({
            submitHeading: '',
            loading: false,
            formSubmitted: false,
            submitMessage: '',
        })
    }

    return (
        <Modal hideExitBtn={formStatus.loading} exitCb={() => exitSignup()}>
            <Flex flexWrap="wrap">
                <Box
                    bg="black"
                    height={['0%', '0%', '100%', '100%']}
                    width={[1, 1, 1 / 3, 1 / 3]}
                    sx={{ position: 'absolute', bottom: '0', left: '0' }}
                >
                    <MageFunk invoking={formStatus.loading} />
                </Box>
                <Box width={[1, 1, 1 / 3, 1 / 3]} />
                <Box p="1rem 0" pl={['0', '0', '0.5rem', '2rem']} width={[1, 1, 2 / 3, 2 / 3]}>
                    {formStatus.formSubmitted ? (
                        <FormResult heading={formStatus.submitHeading} text={formStatus.submitMessage} />
                    ) : (
                        <Form submit={handleSubmit} loading={formStatus.loading} />
                    )}
                </Box>
            </Flex>
        </Modal>
    )
}

export default SignUp
