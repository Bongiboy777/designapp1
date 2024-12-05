'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from './Button/Button';
import { Infobox } from './Infobox';

interface UserTypeSectionProps {}

const UserTypeSection: React.FC<UserTypeSectionProps> = () => {
  return (
    <section className="self-center justify-center flex z-0 flex-wrap gap-2.5 items-center py-2.5 mt-5 max-w-full w-[1200px] mx-auto">

      <Infobox buttonColor={'bg-amber-300'} buttonLabel={'Find a Property'} heading={'Looking for a property'} subheading={'Discover the perfect rental property that suits your needs.'}/>
      <Infobox buttonColor={'bg-black'} buttonLabel={'Add a Property'} heading={'Are you a property owner'} subheading={'List your property and find the perfect tenant.'}/>
    </section>
  );
};

export default UserTypeSection;