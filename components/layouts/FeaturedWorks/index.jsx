import React, { useState } from 'react'
import CakeItem from '../../compounds/CakeItem'
import { Cont, Title, Wrapper, SliderCont } from './style'


import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SwitchBoard from './SwitchBoard'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)


    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {

            "(max-width: 500px)": {
                slides: { perView: 1.6, spacing: 0 },
            },
            "(max-width: 400px)": {
                slides: { perView: 1, spacing: 0 },
            },
            "(min-width: 500px)": {
                slides: { perView: 2, spacing: 0 },
            },
            "(min-width: 600px)": {
                slides: { perView: 2.5, spacing: 0 },
            },
            "(min-width: 750px)": {
                slides: { perView: 3, spacing: 0 },
            },
            "(min-width: 950px)": {
                slides: { perView: 3.5, spacing: 0 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 4, spacing: 10 },
            },
            "(min-width: 1200px)": {
                slides: { perView: 5, spacing: 10 },
            },
        },
        slides: { perView: 1 },
        initial: 1,
        centered: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (<div className="navigation-wrapper">

        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">                <CakeItem />
            </div>
            <div className="keen-slider__slide">                <CakeItem />
            </div>
            <div className="keen-slider__slide">                <CakeItem />
            </div>
            <div className="keen-slider__slide">                <CakeItem />
            </div>
            <div className="keen-slider__slide">                <CakeItem />
            </div>
            <div className="keen-slider__slide">                <CakeItem />
            </div>
            <div className="keen-slider__slide">                <CakeItem />
            </div>
        </div>

        {loaded && instanceRef.current && (
            <>
                <Arrow
                    left
                    onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                />

                <Arrow
                    onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                    }
                />
            </>
        )}

    </div>)
}

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

export default function FeaturedWork() {
    return (
        <Wrapper>
            <Cont>
                <Title>
                    Some of the cakes we've made, <b> So Far!</b>
                </Title>

                <SwitchBoard />
                <SliderCont>
                    <Slider />
                </SliderCont>
            </Cont>

        </Wrapper>
    )
}
