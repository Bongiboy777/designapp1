import React from 'react'
import PropertySection from '@/components/PropertySection'
const page = async () => {
  
  return (
  <div id="properties" className='h-full text-black'>
      <h1 className='text-4xl font-bold '>Properties</h1>
      <PropertySection title="Featured Properties" />
  </div>
    )
}

export default page