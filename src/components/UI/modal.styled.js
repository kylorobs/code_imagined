import React, { useContext } from 'react'
import { Layer } from 'react-layers-manager'
import styled from 'styled-components'
import FocusTrap from 'focus-trap-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SignupContext } from '../../context/toggle'

const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000000000000;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`

const ModalContent = styled.div`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    position: fixed;
    z-index: 500;
    background-color: white;
    width: auto;
    min-width: 50%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 30px;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    max-height: 85%;
    min-height: 400px;
    overflow-y: scroll;
    z-index: 100000;
    transition: all 0.2s ease-in;
    @media (max-width: 800px) {
        padding: 15px;
        min-width: 80%;
    }
`

const ExitButton = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    font-size: 0.6rem;

    &:hover {
        cursor: pointer;
    }
`

const Modal = ({ hideExitBtn, smallwindow, children, exitCb }) => {
    const { visible } = useContext(SignupContext)
    const { exit } = useContext(SignupContext)

    const clickHandler = e => {
        e.preventDefault()
        console.log(e.target)

        if (exitCb) exitCb()
        exit()
    }

    const exitBtn = (
        <ExitButton onClick={e => clickHandler(e)}>
            <FontAwesomeIcon icon="times" size="3x" />
        </ExitButton>
    )

    if (!visible) return null
    return (
        <Layer>
            <Backdrop role="dialog" aria-modal="true">
                <FocusTrap>
                    <ModalContent show smallwindow={!!smallwindow}>
                        {hideExitBtn ? null : exitBtn}
                        {children}
                    </ModalContent>
                </FocusTrap>
            </Backdrop>
        </Layer>
    )
}

export default Modal
