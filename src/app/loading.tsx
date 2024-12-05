'use client'
import React from 'react'
import {ClimbingBoxLoader} from 'react-spinners'
const Loading = () => {
  return (
    <div className='w-full h-full text-center flex flex-col justify-center items-center'>

      <ClimbingBoxLoader color='#4A90E2' size={15} />
      <div className='mt-5'>Loading...</div>
    </div>
  )
}

export default Loading