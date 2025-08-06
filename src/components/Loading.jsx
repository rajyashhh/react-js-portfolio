import {Html, useProgress } from '@react-three/drei'
import React from 'react'


const Loading = ()=>{
    const {progress} = useProgress()
    return <Html center className='font-normal text-xl text-center'>{progress}% Loaded</Html>
}


export default Loading