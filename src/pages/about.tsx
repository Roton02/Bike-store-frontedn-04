import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div className='bg-gray-100 text-black'>
      {/* Hero Section */}
      <section
        className='relative w-full h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?motorbike')",
        }}
      >
        <div className='bg-black bg-opacity-50 p-10 rounded-lg'>
          <h1 className='text-5xl font-bold text-white uppercase animate__animated animate__fadeInDown'>
            About Our Bike Store
          </h1>
          <p className='text-lg text-gray-300 mt-4 animate__animated animate__fadeInUp'>
            Ride with Passion, Powered by Innovation.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section
        className='py-20 px-6 max-w-7xl mx-auto text-center'
        data-aos='fade-up'
      >
        <h2 className='text-4xl font-bold text-black'>Our Story</h2>
        <p className='text-lg text-gray-600 mt-4'>
          Founded in 2010, our bike store has been at the forefront of
          innovation, offering premium electric and sport bikes worldwide.
        </p>
      </section>

      {/* Features Section */}
      <section
        className='grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto'
        data-aos='zoom-in'
      >
        {['Premium Quality', 'Eco-Friendly', 'High Performance'].map(
          (feature, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-lg text-center'
            >
              <h3 className='text-2xl font-bold'>{feature}</h3>
              <p className='text-gray-600 mt-2'>
                Experience the best quality with top-notch engineering.
              </p>
            </div>
          )
        )}
      </section>

      {/* Our Mission */}
      <section
        className='py-20 px-6 max-w-7xl mx-auto text-center'
        data-aos='fade-left'
      >
        <h2 className='text-4xl font-bold text-black'>Our Mission</h2>
        <p className='text-lg text-gray-600 mt-4'>
          To redefine urban mobility with sustainable and stylish transportation
          solutions.
        </p>
      </section>

      {/* Team Section */}
      <section className='py-20 bg-gray-200' data-aos='fade-right'>
        <h2 className='text-4xl font-bold text-center'>Meet Our Team</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto mt-10'>
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-lg text-center'
            >
              <img
                src={`https://source.unsplash.com/200x200/?person${index}`}
                alt='Team Member'
                className='rounded-full mx-auto mb-4'
              />
              <h3 className='text-2xl font-bold'>John Doe</h3>
              <p className='text-gray-600'>Co-Founder & CEO</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        className='py-20 text-center bg-green-600 text-white'
        data-aos='fade-up'
      >
        <h2 className='text-4xl font-bold'>Join the Revolution!</h2>
        <p className='text-lg mt-4'>Experience the future of biking today.</p>
        <button className='mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition'>
          Explore Our Bikes
        </button>
      </section>
    </div>
  )
}

export default AboutPage
