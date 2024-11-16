'use client'
import React from 'react'
import { useSearchParams, usePathname, useParams } from 'next/navigation'

const page = () => {
    const {id} = useParams()

  return (
    <div>
        <h1 className='text-4xl font-bold '>{id}</h1>
    </div>
  )
}

export default page