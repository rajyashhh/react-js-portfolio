import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Experiences from './sections/Experiences'
function App() {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero />
      <About/>
      <Projects/>
      <Experiences/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      {/* testimonials */ }
      {/* contact */ }
      {/* footer */ }
      <SpeedInsights/>
      <Analytics/>
    </div>
  )
}

export default App