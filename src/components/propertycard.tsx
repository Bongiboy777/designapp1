import Link from "next/link";
import React from "react";
import { Button } from "./Button/Button";
import Image from "next/image";
import { FaBed, FaMap, FaMapMarked, FaRuler, FaShower, FaSwimmingPool } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { GiCarWheel, GiGardeningShears } from "react-icons/gi";

interface Property {
  id: number;
  title: string;
  rooms: any;
  type: string;
  address: string;
  sqft?: number;
  prices: {
    [key: string]: string | number;
  };
  imageUrl: string;
}

interface PropertyCardProps {
  property: any | Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const imageIndex = Math.floor(Math.random() * property.images.length);
  return (
    <article className="flex flex-col flex-1 justify-center min-w-[240px] rounded-lg w-[354px] bg-white">
      <div className="flex overflow-hidden flex-col items-center w-full text-sm bg-white rounded-t-lg ">
        <div className="flex flex-col w-full">
          <div className="w-full h-[240px]">
          <Image
            loading="lazy"
            src={property.images[imageIndex]}
            alt={property.name}
            height={1080}
            width={1920}
            className="w-full h-full"
          />
          </div>
          <div className="px-5 py-2 w-full flex flex-col space-y-1">
            <p className="font-light leading-none">{property.type}</p>
            <h3 className="w-full text-base font-semibold">{property.name}</h3>
            <div id="property-card-rooms">{propertyrooms(property.rooms)}</div>
            {property.square_feet && (
              <p className="w-full text-sm font-light flex items-center ">
                <FaRuler size={20} className="mr-2" /> 
                {property.square_feet} sqft</p>
            )}
          </div>
        </div>
      </div>
      <div className="overflow-hidden px-4 py-2 w-full flex items-center bg-white">
        <FaMapMarked size={20} className="mr-2" />
        <div id="property_card_address">
          <p>{property.location.street}</p>
          <p>{property.location.city}, {property.location.state}, {property.location.zipcode}</p>
          <p></p>
        </div>
        </div>
      <div className="self-center max-w-full border border-solid border-stone-300 min-h-[1px] w-[316px]" />

      <div className="flex overflow-hidden justify-center items-center px-4 py-3 w-full font-bold leading-none whitespace-nowrap bg-white">
        {Object.entries(property.rates).map(([key, value], index) => (
          <div key={index} className="flex items-center justify-between w-fit text-center">
            {index > 0 && priceDivider()}
            {priceTag(value as string, key)}
          </div>
        ))}
      </div>
      <div className="flex flex-col pt-1 pb-3 w-full font-bold leading-none text-white bg-white rounded-b-lg">
        <div className="flex gap-2 items-start px-4 w-full">
          <Button className="bg-amber-300 capitalize">
            <Link href={`/properties/${property.id}`}>
              Details
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};
export default PropertyCard;

const priceTag = (price: string | number, frequency: string) => {
  const formattedPrice = typeof price === 'number' ? price.toLocaleString() : price;
  return (
    <div className="flex flex-col items-center justify-center text-center w-fit ">
      <span className="text-lg font-bold">${formattedPrice}</span>
      <span className="text-xs text-gray-500">{frequency}</span>
    </div>
  );
};

const priceDivider = () => (
  <div className="shrink-0 self-stretch my-auto mx-2 bg-black w-0 border border-solid border-zinc-400 h-[30px]" />
);

const propertyrooms = (rooms: any) => {
  const roomsArray = Object.keys(rooms);

  return (
    <div id="property-card-rooms" className="flex flex-wrap gap-2 items-center text-center py-1">
      {roomsArray.includes("beds") && roomItem(<FaBed size={20} />, rooms.beds)}
      {roomsArray.includes("baths") && roomItem(<FaShower size={20} />, rooms.baths)}
      {roomsArray.includes("pools") && roomItem(<FaSwimmingPool size={20} />, rooms.pools)}
      {roomsArray.includes("Garages") && roomItem(<GiCarWheel size={20} />, rooms.Garages)}
      {roomsArray.includes("Gardens") && roomItem(<GiGardeningShears size={20} />, rooms.Gardens)}
    </div>
  );
};

const roomItem = (icon: any, label: string) => (
  <div id="property-card-rooms" className="flex space-x-2 items-center text-center">
    {icon}
    <p>{label}</p>
  </div>
);


