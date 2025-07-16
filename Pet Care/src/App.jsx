import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Services from './Pages/Services'
import BlogDetail from './Pages/BlogDetail'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/BlogDetail/:id" element={<BlogDetail />} />
        
      </Routes>
    </BrowserRouter>
  )

}

export default App
