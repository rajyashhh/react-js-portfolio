import {Html, useProgress } from '@react-three/drei'
import React from 'react'


const Loader = ()=>{
    const {progress} = useProgress()
    return <Html center>{progress}% Loaded</Html>
}


export default Loader