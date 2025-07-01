import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from './About'

const Home = () => {
  return (
    <div className='bg-indigo-100 min-h-screen w-full'>
      <Navbar />
      <Hero />
      <About/>
    </div>
  )
}

export default Home
