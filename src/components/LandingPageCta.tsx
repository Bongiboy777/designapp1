'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from './Button/Button';

interface UserTypeSectionProps {}

const UserTypeSection: React.FC<UserTypeSectionProps> = () => {
  return (
    <section className="self-center justify-center flex z-0 flex-wrap gap-2.5 items-center py-2.5 mt-5 max-w-full w-[1200px] mx-auto">
      <div className="flex flex-col flex-1 shrink justify-center px-12 py-5 bg-white rounded-xl basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center p-2.5 w-full text-black max-md:max-w-full">
          <h2 className="text-lg font-bold uppercase">
            <span className="capitalize">for Renters</span>
          </h2>
          <p className="mt-2.5 text-base font-light max-md:max-w-full">
            Discover the perfect property that suits your needs.
          </p>
        </div>
        <div className="flex gap-2.5 items-center mt-2.5 w-full text-lg font-extrabold text-center text-white uppercase max-md:max-w-full">
          <Button className='bg-amber-300'>
            <Link href="/search" >
              Search for a property
            </Link>
          </Button>
         
        </div>
      </div>
      <div className="flex flex-col flex-1 shrink justify-center px-12 py-5 bg-white rounded-xl basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center p-2.5 w-full text-black max-md:max-w-full">
          <h2 className="text-lg font-bold uppercase">
            <span className="capitalize">for Property Owners</span>
          </h2>
          <p className="mt-2.5 text-base font-light max-md:max-w-full">
            List your property and find the perfect tenant.
          </p>
        </div>
        <div className="flex gap-2.5 items-center mt-2.5 w-full text-lg font-extrabold text-center text-white uppercase max-md:max-w-full">
         <Button className='bg-black'>
            <Link href="/add-property" >
              Add Property
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserTypeSection;