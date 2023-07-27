import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import React from 'react'
import Image from 'next/image'
import AboutImg1 from '../public/aboutImg1.jpg';
import AboutImg2 from '../public/aboutImg2.jpg';
import AboutImg3 from '../public/aboutImg3.jpg';
import AboutImg4 from '../public/aboutImg4.jpg';

const PhotoSlider = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 1500)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
    
      return (
        <div ref={sliderRef} className="keen-slider w-full h-full m-auto">
            <Image className='keen-slider__slide rounded-xl' src={AboutImg1} alt='/' />
            <Image className='keen-slider__slide rounded-xl' src={AboutImg2} alt='/' />
            <Image className='keen-slider__slide rounded-xl' src={AboutImg3} alt='/' />
            <Image className='keen-slider__slide rounded-xl' src={AboutImg4} alt='/' />
        </div>

      )
    }

    export default PhotoSlider