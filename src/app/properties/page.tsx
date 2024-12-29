import React from 'react'
import { getProperties } from '../lib/utils'
import PropertySection from '@/components/PropertySection'
const page = async () => {
  const properties = await getProperties()
  console.log(properties)
  return (
  <div id="properties" className='h-full text-black'>
      <h1 className='text-4xl font-bold '>Properties</h1>
      <PropertySection title="Featured Properties" />
  </div>
    )
}

export default page