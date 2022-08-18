import React from 'react'
import PrimaryButton from '../../primitives/buttons/Primary'
import FancyImage from '../FancyImage'
import { Wrapper, Title, Descr } from './styles'

export default function CakeItem({ CakeTitle }) {
    return (
        <Wrapper>

            <FancyImage />
            <Title>Cool Title</Title>
            <Descr>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse tempor.
            </Descr>
            <PrimaryButton>More info</PrimaryButton>
        </Wrapper>
    )
}
