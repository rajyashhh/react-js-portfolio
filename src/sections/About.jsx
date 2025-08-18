import React from 'react'
import Card from '../components/Card'
import { useRef } from 'react';
import { Globe } from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import {Frameworks} from '../components/Frameworks';
import GithubGraph from '../components/GithubGraph';

const About = () => {
    const grid2Container = useRef();
  return (
    <section className='c-space section-spacing'>
        <h2 className='text-heading'>About Me</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
            {/* Grid 1 */}
            <div className='flex items-end grid-default-color grid-1'>
                <img 
                src='assets/coding-pov.webp'
                className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg-scale-[2.5]'/>
                <div className='z-10'>
                  <p className='headtext'>Hi, I'm Yash Raj Singh</p>  
                  <p className='subtext'>Have a idea to bring out to the market? You are at the right place. 
                    From last 2 years, building products from 0 to 1!
                  </p>
                </div>
                <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'/>
            </div>
            {/* Grid 2 */}
            <div className='grid-default-color grid-2'>
                <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                    <p className='flex items-end text-5xl text-gray-500'>YASHHH</p>
                    <Card style={{rotate: "-30deg", top:"20%", left:"10%"}} text="Sleek Design" containerRef={grid2Container}/>
                    <Card style={{rotate: "25deg", top:"80%", left:"40%"}} text="Modern Design" containerRef={grid2Container}/>
                    <Card style={{rotate: "-15deg", top:"65%", left:"65%"}} text="SEO friendly" containerRef={grid2Container}/>
                    <Card style={{rotate: "-40deg", top:"60%", left:"-10%"}} text="SAAS" containerRef={grid2Container}/>
                    <Card style={{rotate: "50deg", top:"30%", left:"70%"}} text="Full Stack" containerRef={grid2Container}/>
                    {/* <Card style={{rotate: "-45deg", top:"55%", left:"0%"}} text="Powerful" containerRef={grid2Container}/> */}
                    <Card style={{rotate: "30deg", top:"10%", left:"70%"}} image="assets/logos/atom.png" containerRef={grid2Container}/>
                    <Card style={{rotate: "45deg", top:"70%", left:"25%"}} image="assets/logos/html.png" containerRef={grid2Container}/>
                    <Card style={{rotate: "-45deg", top:"5%", left:"10%"}} image="assets/logos/java-script.png" containerRef={grid2Container}/>
                </div>
            </div>
            {/* Grid 3 */}
            <div className='grid-black-color grid-3'>
                <div className="z-10 w-[50%]">
                    <p className='headtext'>Time Zone (GMT +5:30)</p>
                    <p className='subtext'>I'm based in Kolkata, India and open to remote work worldwide</p>
                </div>
                <figure className='absolute left-[30%] top-[10%]'>
                <Globe/>
                 </figure>
            </div>
           
            {/* Grid 4 */}
            <div className='grid-special-color grid-4'>
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className='text-center headtext'>Have a cool idea to build together or want to hire me?</p>
                    <CopyEmailButton/>
                </div>
            </div>
            {/* Grid 5 */}
            <div className='grid-default-color grid-5'>
                <div className='z-10 w-[50%]'>
                    <p className='headtext'>Tech Stack</p>
                    <p className='subtext'>I build robust, scalable applications by applying a comprehensive toolkit of modern languages and frameworks.</p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                    <Frameworks/>
                </div>
            </div>
            {/* Grid 6 */}
            <a
                href="https://github.com/rajyashhh"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-default-color grid-6 flex flex-col items-center justify-center p-4 rounded-2xl shadow-lg hover:scale-[1.01] transition-transform cursor-pointer text-center"
                >
                <p className="headtext mb-4">
                    That retro snake eating my GitHub Contributions!
                </p>
                <p className="subtext mb-0">
                Help me save my contributions! Click to chase the snake on GitHub.
                </p>
                <GithubGraph />
            </a>

            
            
        </div>
        

    </section>
  )
}

export default About