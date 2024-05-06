import React from 'react'
import { Html,useProgress } from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress()
  // console.log(progress);
  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{
        fontSize:14,
        color:'#f1f1f1',
        fontWeight:800,
        marginTop:40
      }}> {progress.toFixed(2)}</p>
      <div>Loadering...</div>

    </Html>
  )
}

export default Loader