import React from 'react'
import { H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { Copy } from '../../../components/layout/containers/containers.styled'

const difficult = () => (
    <Copy>
        <H2>Ask yourself...</H2>
        <P>
            How well do you understand JavaScript fundamentals? It's one thing building apps. It's another knowing the{' '}
            <strong style={{ color: 'white' }}>language quirks</strong> which drive them.
        </P>
    </Copy>
)

export default difficult
