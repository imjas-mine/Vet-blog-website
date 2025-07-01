import React from 'react'
import HeroImage from '../assets/Hero.png'

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 py-8 md:px-28 md:py-10 bg-gradient-to-b from-indigo-200 to-white rounded-xl shadow-lg mt-8 mx-10">
      {/* Left: Text */}
      <div className="w-full md:w-[40%] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif lg:text-7xl">
          Dr. Simran's Pet Care
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mb-6 mt-16">
        Healthy Pets, Happy Lives!
        </p>
        <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-6">
        Discover essential pet care tips from Dr. Simran to ensure your furry friends live long, healthy, and joyful lives.
        </p>
      
      </div>
      {/* Right: Image */}
      <div className="w-full md:w-[60%] flex justify-center mb-8 md:mb-0">
        <img
          src={HeroImage}
          alt="Happy dog"
          className="w-full max-w-xs md:max-w-3xl"
        />
      </div>
    </section>
  )
}

export default Hero
