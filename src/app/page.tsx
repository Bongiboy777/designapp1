import React from 'react';
import Header from '@/components/header';
import SearchSection from '@/components/hero';
import PropertySection from '@/components/PropertySection';
import Footer from '@/components/footer';
import { Infobox } from '@/components/Infobox';


const PropertyPulse: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-indigo-50">
      <Header />
      <main className="w-full px-4 sm:px-6 lg:px-8">
        <SearchSection />
        <section  className="self-center justify-center flex z-0 flex-wrap gap-2.5 items-center py-2.5 mt-5 max-w-full w-[1200px] mx-auto">

      <Infobox href='/properties' buttonColor={'bg-amber-300'} buttonLabel={'Find a Property'} heading={'Looking for a property'} subheading={'Discover the perfect rental property that suits your needs.'}/>
      <Infobox href='/properties/add' buttonColor={'bg-black'} buttonLabel={'Add a Property'} heading={'Are you a property owner'} subheading={'List your property and find the perfect tenant.'}/>
    </section>
        <PropertySection title="Featured Properties" />
        <PropertySection title="Recent Properties" />
      </main>
      <Footer />
    </div>
  );
};

export default PropertyPulse;