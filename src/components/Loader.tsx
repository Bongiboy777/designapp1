import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='w-full h-full text-center flex flex-col justify-center items-center'>
        <ClimbingBoxLoader
        size={15}
        color={"#36d7b7"}
        />
    </div>
  )
}

export default Loader