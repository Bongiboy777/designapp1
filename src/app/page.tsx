import React from 'react';
import Header from '@/components/header';
import SearchSection from '@/components/hero';
import UserTypeSection from '@/components/LandingPageCta';
import PropertySection from '@/components/PropertySection';
import Footer from '@/components/footer';

interface PropertyPulseProps {}

const PropertyPulse: React.FC<PropertyPulseProps> = () => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-indigo-50">
      <Header />
      <main className="w-full px-4 sm:px-6 lg:px-8">
        <SearchSection />
        <UserTypeSection />
        <PropertySection title="Featured Properties" />
        <PropertySection title="Recent Properties" />
      </main>
      <Footer />
    </div>
  );
};

export default PropertyPulse;