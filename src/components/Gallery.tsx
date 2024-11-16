import React from 'react';
import PropertyCard from '@/components/propertycard';

interface PropertySectionProps {
  title: string;
}

const PropertySection: React.FC<PropertySectionProps> = ({ title }) => {
  const properties = [
    {
        id: 1,
        title: "Beautiful Apartment",
        details: "2 beds, 1 bath, 800 sqft",
        type: "Terraced House",
        address: "4 Waterton Way, Hampton Vale",
        monthlyPrice: 1200,
        weeklyPrice: 300,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/46e9462fd9524dc58a59e60e3bf6053c/13c45990c4397b40ec9fddd9b1125f6dee34a039677e918eba909947684789a2?apiKey=46e9462fd9524dc58a59e60e3bf6053c&"
      },
      {
        id: 2,
        title: "Beautiful Apartment",
        details: "2 beds, 1 bath, 800 sqft",
        type: "Terraced House",
        address: "4 Waterton Way, Hampton Vale",
        monthlyPrice: 1200,
        weeklyPrice: 300,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/46e9462fd9524dc58a59e60e3bf6053c/13c45990c4397b40ec9fddd9b1125f6dee34a039677e918eba909947684789a2?apiKey=46e9462fd9524dc58a59e60e3bf6053c&"
      },
      {
        id: 3,
        title: "Beautiful Apartment",
        details: "2 beds, 1 bath, 800 sqft",
        type: "Terraced House",
        address: "4 Waterton Way, Hampton Vale",
        monthlyPrice: 1200,
        weeklyPrice: 300,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/46e9462fd9524dc58a59e60e3bf6053c/13c45990c4397b40ec9fddd9b1125f6dee34a039677e918eba909947684789a2?apiKey=46e9462fd9524dc58a59e60e3bf6053c&"
      },
      {
        id: 4,
        title: "Beautiful Apartment",
        details: "2 beds, 1 bath, 800 sqft",
        type: "Terraced House",
        address: "4 Waterton Way, Hampton Vale",
        monthlyPrice: 1200,
        weeklyPrice: 300,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/46e9462fd9524dc58a59e60e3bf6053c/13c45990c4397b40ec9fddd9b1125f6dee34a039677e918eba909947684789a2?apiKey=46e9462fd9524dc58a59e60e3bf6053c&"
      },
    // Add more property objects as needed
  ];

  return (
    <section className="flex z-0 flex-col items-center py-5 mt-5 w-full  max-md:max-w-full">
      <div className="max-w-full border border-solid border-slate-400 min-h-[1px] w-[1200px]" />
      <h2 className="mt-2.5 text-2xl font-bold text-center text-black">{title}</h2>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-5 p-2.5 mt-2.5 max-w-full text-base text-zinc-800 w-[1200px]">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            title={property.title}
            details={property.details}
            type={property.type}
            address={property.address}
            monthlyPrice={property.monthlyPrice.toString()}
            weeklyPrice={property.weeklyPrice.toString()}
            imageUrl={property.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertySection;