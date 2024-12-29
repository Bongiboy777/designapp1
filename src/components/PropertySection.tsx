import React from 'react';
import PropertyCard from '@/components/propertycard';

interface PropertySectionProps {
  title: string;
}

const PropertySection: React.FC<PropertySectionProps> = async ({ title }) =>  {

    const properties = await fetch('http://localhost:3000/api/properties').then((res) => res.json());
    return (
    <section className="flex z-0 flex-col items-center py-5 mt-5 w-full  max-md:max-w-full">
    
      {/* <div className="max-w-full border border-solid border-slate-400 min-h-[1px] w-[1200px]" /> */}
      <h2 className="mt-2.5 text-2xl font-bold text-center text-black">{title}</h2>
      <div className="flex flex-wrap justify-between gap-x-5 gap-y-5 mt-2.5 max-w-full text-base text-zinc-800 w-[1200px]">
        {properties && properties.length > 0 ? properties.map((property, index) => (
          <PropertyCard
            property={property}
            key={index}
          />
        )) : ( <h2>No properties found</h2> )}
      </div>
    </section>
    );
  }

export default PropertySection;


