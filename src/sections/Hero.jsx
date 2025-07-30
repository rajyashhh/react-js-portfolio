import React from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { Canvas } from '@react-three/fiber'
import { Astronaut } from '../components/Astronaut'
import {OrbitControls} from '@react-three/drei'
import {useMediaQuery} from 'react-responsive'


function Hero() {
  const isMobile=useMediaQuery({maxWidth:853})
  return (
    <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
        <HeroText/>
        <ParallaxBackground/>
        <figure className='absolute inset-0' style={{width: "100vw", height: "100vh"}}>
            <Canvas camera={{position: [0,1,3]}}>
              <Astronaut 
              scale={isMobile && 0.23} 
              position={isMobile && [0, -1.5, 0]}/>
              <OrbitControls/>
            </Canvas>
        </figure>
    </section>
  )
}

export default Hero