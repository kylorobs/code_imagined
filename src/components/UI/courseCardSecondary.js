import React from 'react'
import { createStyles, Paper, Text, Title, rem, Flex } from '@mantine/core'
import styled from 'styled-components'
import { Button } from './button.styled'

const Card = styled.div`
    :hover,
    :focus,
    :active {
        filter: brightness(1.6);
    }
`

const useStyles = createStyles(theme => ({
    card: {
        position: 'relative',
        height: rem(540),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    title: {
        fontFamily: `Greycliff CF ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
        marginBottom: 12,
    },

    publishDate: {
        color: theme.white,
        opacity: 1,
        fontWeight: 700,
        // textTransform: 'uppercase',
        fontSize: rem(16),
    },

    overlay: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity as needed
        pointerEvents: 'none', // Allow clicks to go through the overlay
    },
    content: {
        position: 'relative', // Add relative positioning to the content container
        zIndex: 2, // Adjust the content's z-index to ensure it's above the overlay
    },
}))

// interface ArticleCardImageProps {
//   image: string;
//   title: string;
//   publishDate: string;
// }

function CourseCardSecondary({ image, title, publishDate, type, link }) {
    const { classes } = useStyles()

    return (
        <Card>
            <Paper
                shadow="md"
                p="xl"
                radius="md"
                sx={{ backgroundImage: `url(${image})` }}
                className={`${classes.card}`}
            >
                <div className={classes.overlay} />
                <div className={classes.content}>
                    <Title order={3} className={classes.title}>
                        {title}
                    </Title>
                    <Text className={classes.publishDate} size="xs">
                        {publishDate}
                    </Text>
                </div>
                <Flex justify="center" mt="xl" style={{ zIndex: 1000 }}>
                    <Button color={type === 'paid' ? 'red' : 'blue'} type="link" size="small" link={link}>
                        {type === 'paid' ? 'Learn More' : 'Free Access'}
                    </Button>
                </Flex>
            </Paper>
        </Card>
    )
}

export default CourseCardSecondary
