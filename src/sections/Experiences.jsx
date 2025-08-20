import React from 'react'
import { Timeline } from '../components/Timeline'
import { experiences } from '../constants'

const Experiences = () => {
  return (
    <div className='w-full'>
      {/* Invisible anchor with offset */}
      <div id="experience" className="scroll-mt-20"></div> 

      {/* Actual content */}
      <Timeline data={experiences} />
    </div>
  )
}

export default Experiences