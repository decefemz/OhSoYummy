import React from 'react'
import FancyImage from '../../compounds/FancyImage'
import PrimaryButton from '../../primitives/buttons/Primary'
import SecondaryButton from '../../primitives/buttons/Secondary'
import SliderHero from './Slider'
import { ButtonCont, HeroTitle, Row2, Row1, Wrapper, Cont, HeroDescr } from './style'

export default function Hero() {
    return (
        <Wrapper>
            <Cont>
                <Row1>
                    <HeroTitle>
                        The best cakes in town, <b>Period!</b>
                    </HeroTitle>
                    <HeroDescr>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse  tempor.

                    </HeroDescr>
                    <ButtonCont>
                        <PrimaryButton>Order Now!</PrimaryButton>
                        <SecondaryButton>View Catalogue</SecondaryButton>
                    </ButtonCont>
                </Row1>
                <Row2>
                    <SliderHero />
                </Row2>
            </Cont>
        </Wrapper>
    )
}
