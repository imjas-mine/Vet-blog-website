import React from 'react'
import aboutImage from '../assets/Hero.png'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <div className='bg-indigo-100 min-h-screen w-full'>
      <Navbar />
      <div className='px-4 py-8 md:px-28 md:py-10 mx-10 '>
        <h1 className='text-4xl md:text-6xl font-bold text-center mb-10 text-indigo-900 font-serif'>Welcome!</h1>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-10'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <img src={aboutImage} alt="About Dr. Simran" className='w-64 md:w-full' />
          </div>
          <div className='w-full md:w-1/2'>
            <p className='md:text-xl text-gray-700 mb-6 font-sans'>
              Dr. Simran is a dedicated pet care specialist with a passion for helping animals live their best lives. With years of experience in veterinary care, she has a deep understanding of animal behavior and health.
            </p>
            <ul className='list-disc pl-5 text-gray-700 space-y-2 text-sm md:text-xl font-sans'>
              <li>15+ years of veterinary experience</li>
              <li>1000+ happy pets cared for</li>
              <li>500+ families served</li>
              <li>Comprehensive services: checkups, vaccinations, surgery, dental care, emergency care, and nutrition</li>
              <li>Compassionate, patient-centered approach</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About