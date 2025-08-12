import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero />
      <About/>
      <Projects/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      
      {/* experience */ }
      {/* testimonials */ }
      {/* contact */ }
      {/* footer */ }
      <Analytics/>
    </div>
  )
}

export default App