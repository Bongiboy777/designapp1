'use client'

import Link from 'next/link';
import React from 'react';
import { Button } from './Button/Button';

interface PropertyCardProps {
  title: string;
  details: string;
  type: string;
  address: string;
  monthlyPrice: string;
  weeklyPrice: string;
  imageUrl: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  details,
  type,
  address,
  monthlyPrice,
  weeklyPrice,
  imageUrl
}) => {
  return (
    <article className="flex flex-col justify-center rounded-2xl min-w-[240px] shadow-[1px_2px_3px_rgba(0,0,0,0.25)] w-[354px]">
      <div className="flex overflow-hidden flex-col items-center w-full text-sm bg-white rounded-2xl aspect-square">
        <div className="flex flex-col px-4 pt-3 w-full">
          <img loading="lazy" src={imageUrl} alt={title} className="object-contain w-full rounded-none aspect-[1.25]" />
          <h3 className="pt-3 pb-0.5 w-full text-base font-semibold">{title}</h3>
          <p className="flex-1 shrink gap-1 pb-2 w-full font-medium leading-none">{details}</p>
          <p className="font-light leading-none">{type}</p>
        </div>
      </div>
      <div className="overflow-hidden px-4 py-2 w-full bg-white">{address}</div>
      <div className="self-center max-w-full border border-solid border-stone-300 min-h-[1px] w-[316px]" />
      <div className="flex overflow-hidden gap-2 justify-center items-center px-4 py-3 w-full font-bold leading-none whitespace-nowrap bg-white">
        <div className="gap-1 self-stretch px-4 py-2 my-auto rounded-3xl border border-solid border-zinc-400">${monthlyPrice}/month</div>
        <div className="shrink-0 self-stretch my-auto w-0 border border-solid border-zinc-400 h-[30px]" />
        <div className="gap-1 self-stretch px-4 py-2 my-auto rounded-3xl border border-solid border-zinc-400">${weeklyPrice}/week</div>
      </div>
      <div className="flex flex-col pt-1 pb-3 w-full font-bold leading-none text-white bg-white rounded-none">
        <div className="flex gap-2 items-start px-4 w-full">
          <Button className='bg-amber-300 capitalize'>
                
              <Link href={`/property-details/${encodeURIComponent(title)}`} >
                View Details
              </Link>
          </Button>
         
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;