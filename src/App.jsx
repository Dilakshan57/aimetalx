import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Materials from './pages/Materials'
import Services from './pages/Services'

import Contact from './pages/Contact'
import Footer from "@/components/Footer";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      
   
      </div>
    <Footer/>
    </div>
  )
}

export default App


