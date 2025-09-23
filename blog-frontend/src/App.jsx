import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Services from './Pages/Services'
import BlogDetail from './Pages/BlogDetail'
import Login from './Pages/Login'
import AddBlog from './Pages/AddBlog'
import UpdateBlog from './Pages/UpdateBlog'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Pricing from './Pages/Pricing'
import FAQPage from './Pages/FAQPage'
function App() {
 
  return (
<div>
  <Navbar></Navbar>
  <Hero></Hero>
  <About></About>
  <Services></Services>
  <Pricing></Pricing>
  <FAQPage></FAQPage>
  <Blogs></Blogs>
</div>
  )

}

export default App
