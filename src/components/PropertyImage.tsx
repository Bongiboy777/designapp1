import React from 'react'
import Image from 'next/image'
interface propertyImageProps {
    src: string;
    alt?: string;
    id:string;
}

const PropertyImage: React.FC<propertyImageProps> = ({src, alt, id}) => {
  return (
    <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
        <Image
        className='w-full m-0 p-0'
        sizes='100vw'
        width={0}
        height={0}
        style={{width: '100%', height: '400px', objectFit: 'cover'}}
         src={src} alt={alt ? alt : id}/>

    </div>
    </div>
  )
}

export default PropertyImage