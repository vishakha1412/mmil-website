import React from 'react'
import { Navbar } from './componenets/Navbar'
import {Hero} from './pages/Hero'
import Feature from './pages/Feature'
import Footer from './componenets/Footer'
 
import Testimonials from './pages/Testimonials'
import { About } from './pages/About'
import { Course } from './pages/Course'
import { FAQ } from './pages/FAQ'
import { GetStarted } from './componenets/GetStarted'
const App = () => {
  return (
   <div>
      <div className="bg-[rgba(13,13,18,1)] font-sans">
       <Navbar />
      <Hero />
      <Feature/>
      <About id='about'/>
      <Course id='courses'/>
      <FAQ/>
      <GetStarted/>
      
      <Testimonials />
       
      <Footer />

    </div>

   </div>
  )
}

export default App