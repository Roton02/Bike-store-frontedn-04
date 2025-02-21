/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react'
import { Button } from '@/components/ui/button' // ShadCN UI Button
import Slider, { Settings } from 'react-slick' // React Slick for Slider
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'

const images = [banner1, banner1, banner1, banner1]

// Custom Arrow Components
const NextArrow = (props: any) => (
  <div
    {...props}
    className='absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer'
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 text-white'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M9 5l7 7-7 7'
      />
    </svg>
  </div>
)

const PrevArrow = (props: any) => (
  <div
    {...props}
    className='absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer'
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 text-white'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M15 19l-7-7 7-7'
      />
    </svg>
  </div>
)

const BikeBikeBanner: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  // Explicitly type the sliderRef to include the slickGoTo method
  const sliderRef = useRef<Slider | null>(null)

  const handleThumbnailClick = (index: number) => {
    setActiveSlide(index)
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index) // Ensure slickGoTo is called only if sliderRef is not null
    }
  }

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
  }

  return (
    <div className='relative w-full bg-white'>
      {/* Bike Image and Slider */}
      <div className='relative flex flex-col md:flex-row-reverse items-center justify-center overflow-hidden'>
        <div className='w-full md:w-1/2 flex justify-center p-4'>
          <Slider {...settings} ref={sliderRef} className='w-full max-w-md'>
            {images.map((img, index) => (
              <div key={index} className='flex justify-center'>
                <img
                  src={img}
                  alt={`Bike ${index + 1}`}
                  className='object-contain rounded-lg transition-transform duration-300 hover:scale-105'
                />
              </div>
            ))}
          </Slider>

          {/* Thumbnail Navigation */}
          <div className='flex justify-center mt-4 space-x-2'>
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`cursor-pointer rounded-lg overflow-hidden transition-transform duration-300 ${
                  activeSlide === index ? 'border-2 border-green-600' : ''
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 object-cover ${
                    activeSlide === index ? 'scale-110' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text and Call-to-Action */}
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start p-6 md:p-12 space-y-4'>
          <h1 className='text-4xl md:text-5xl font-bold text-black uppercase tracking-tight'>
            LET'S RIDE! BIKE-BIKE
          </h1>
          <p className='text-lg md:text-xl text-gray-600'>
            Simple and sleek design with users in mind.
          </p>
          <Button className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg transition-all duration-300 transform hover:scale-105'>
            Buy Now
          </Button>
        </div>
      </div>

      {/* Spec Cards */}
      <div className='w-full p-6 grid grid-cols-2 md:grid-cols-6 gap-4 mx-auto max-w-6xl'>
        {[
          { title: '105 lbs', desc: 'Net Weight' },
          { title: '26 mph', desc: 'Top Speed' },
          { title: '42 miles', desc: 'Max Range' },
          { title: '89 nm', desc: 'Max Torque' },
          { title: '22% slope', desc: 'Incline Support' },
          { title: '2x', desc: 'Hydraulic Disc Brakes' },
        ].map((spec, index) => (
          <div
            key={index}
            className='bg-white p-4 rounded-lg shadow-xl text-center transition-all duration-300 hover:shadow-2xl hover:scale-105'
          >
            <span className='text-xl font-bold text-black'>{spec.title}</span>
            <p className='text-gray-600'>{spec.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BikeBikeBanner
