import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='bg-indigo-400 mx-10 rounded-2xl flex items-center justify-between px-4 md:px-10 py-4 sticky top-4 z-10'>
      <div className='text-white text-2xl md:text-3xl font-bold font-serif'>Dr. Simran</div>
      {/* Hamburger Icon for Mobile */}
      <button
        className='md:hidden text-white text-3xl focus:outline-none hover:text-gray-300 transition-colors duration-300 cursor-pointer'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label='Toggle menu'
      >
        {menuOpen ? '✕' : '☰'}
      </button>
      {/* Links for Desktop */}
      <div className='hidden md:flex gap-10 text-white text-lg font-semibold'>
        <Link to="/" className='hover:text-gray-300'>Home</Link>
        <Link to="/about" className='hover:text-gray-300'>About Dr.Simran</Link>
        <Link to="/petCare" className='hover:text-gray-300'>Pet Care</Link>
        <Link to="/blogs" className='hover:text-gray-300'>Blogs</Link>
        <Link to="/contact" className='hover:text-gray-300'>Contact</Link>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className='absolute top-20 left-0 w-full flex flex-col items-center gap-6 bg-indigo-400 rounded-b-2xl py-6 shadow-lg md:hidden z-20'>
          <Link to="/" className='hover:text-gray-300 text-white text-lg font-semibold' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className='hover:text-gray-300 text-white text-lg font-semibold' onClick={() => setMenuOpen(false)}>About Dr.Simran</Link>
          <Link to="/petCare" className='hover:text-gray-300 text-white text-lg font-semibold' onClick={() => setMenuOpen(false)}>Pet Care</Link>
          <Link to="/blogs" className='hover:text-gray-300 text-white text-lg font-semibold' onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link to="/contact" className='hover:text-gray-300 text-white text-lg font-semibold' onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar