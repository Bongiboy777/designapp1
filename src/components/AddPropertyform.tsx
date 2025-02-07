'use client'
import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import { propertyInterface } from '@/app/models/property';
import ImageWithRemoveButton from './ImageWithRemoveButton';
import { FaTimes } from 'react-icons/fa';

const AddPropertyform = () => {
  const [property, setProperty] = React.useState<Omit<propertyInterface, 
  '_id' | 'owner' | 'createdAt' | 'updatedAt' | 'is_featured' >>({
    
    name: '',
    type: '',
    description: '',
    location: {
      street: '',
      city: '',
      state: '',
      zipcode: '',
    },
    beds: 0,
    baths: 0,
    square_feet: 0,
    amenities: [],
    rates: {
      weekly: 0,
      monthly: 0,
      nightly: 0,
    },
    images: [],
    seller_info: {
      name: '',
      email: '',
      phone: '',
    },
  });
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [showLargeImage, setShowLargeImage] = useState<string | null>(null);

  const handleChange = async (changeEvent: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => {
    console.log(typeof(changeEvent));
    console.log(changeEvent.target.value);
    const {name: targetName, value} = changeEvent.target
    const keys = targetName.split('.')
    if (keys.length == 1){
      await setProperty((p) => ({...p, [targetName]: value }))
      console.log('primary key:', keys)

    }
    else{

      await setProperty((p) => ({
        ...p, 
        [keys[0]]: {
          ...p[keys[0]],
          [keys[1]]:value
          
        }}))
        console.log('nested key:', keys)

    }
    console.log(property[keys[0]])
    
    }
  
  const handleAmenitiesChange = async (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const updatedAmenites = new Set<string>(property.amenities)
    if (changeEvent.target.checked){
        updatedAmenites.add(changeEvent.target.value)
      
    }
    else{
     
        updatedAmenites.delete(changeEvent.target.value)
      
    }
    await setProperty((prev) => ({...prev, amenities: [...updatedAmenites]}))
    console.log(property.amenities);


    
    }
  const handleRatesChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    console.log(typeof(changeEvent));
    console.log(changeEvent.target.name);
    }


    const handleImagesChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        event.preventDefault();
        console.log("Event prevented");

        const filesArray = Array.from(event.target.files);
        console.log("Files array created:", filesArray);

        const uniqueValues = [...new Set(filesArray.map(file => file.name).concat(selectedImages))];
        console.log("Unique values created:", uniqueValues);

        const filteredFiles = filesArray.filter(f => uniqueValues.includes(f.name));
        console.log("Filtered files:", filteredFiles);

        const imageUrls = filteredFiles.map((file, index) => URL.createObjectURL(file));
        console.log("Image URLs created:", imageUrls);

        setProperty((prev) => ({...prev, images: imageUrls}));
        console.log("Property images updated");

        setSelectedImages((prev) => uniqueValues);
        console.log("Selected images updated");

        // filesArray.forEach((file) => URL.revokeObjectURL(file));
        // console.log("Object URLs revoked");
      }
    };

    const handleRemoveImage = (index: number) => {
      const imagesList = property.images.filter((_, i) => i !== index)
      setProperty((prev) => ({...prev, images: imagesList}));
      setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleImageClick = (src: string) => {
      setShowLargeImage(src);
    };
  
    const handleCloseLargeImage = () => {
      setShowLargeImage(null);
    };

    const handleSubmit = async () => {
      console.log("caller: handle submit: \nsubmitting form");
    }


  return (
   
            <form method='POST' action={'/api/properties' } className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add Property
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
                >Property Type</label
              >
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                value={property.type}
                onChange={handleChange}
                required
              >
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                <option value="House">House</option>
                <option value="Cabin Or Cottage">Cabin or Cottage</option>
                <option value="Room">Room</option>
                <option value="Studio">Studio</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Listing Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                value={property.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="Add an optional description of your property"
                value={property.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-4 bg-blue-50 p-4">
              <label className="block text-gray-700 font-bold mb-2">Location</label>
              <input
                type="text"
                id="street"
                name="location.street"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Street"
                value={property.location.street}
                onChange={handleChange}
              />
              <input
                type="text"
                id="city"
                name="location.city"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="City"
                required
                value={property.location.city}
                onChange={handleChange}
              />
              <input
                type="text"
                id="state"
                name="location.state"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="State"
                value={property.location.state}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="zipcode"
                name="location.zipcode"
                className="border rounded w-full py-2 px-3 mb-2"
                value={property.location.zipcode}
                onChange={handleChange}
                required
                placeholder="Zipcode"
              />
            </div>

            <div className="mb-4 flex flex-wrap">
              <div className="w-full sm:w-1/3 pr-2">
                <label htmlFor="beds" className="block text-gray-700 font-bold mb-2"
                  >Beds</label
                >
                <input
                  type="number"
                  id="beds"
                  name="beds"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={property.beds}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full sm:w-1/3 px-2">
                <label htmlFor="baths" className="block text-gray-700 font-bold mb-2"
                  >Baths</label
                >
                <input
                  type="number"
                  id="baths"
                  name="baths"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={property.baths}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full sm:w-1/3 pl-2">
                <label
                  htmlFor="square_feet"
                  className="block text-gray-700 font-bold mb-2"
                  >Square Feet</label
                >
                <input
                  type="number"
                  id="square_feet"
                  name="square_feet"
                  className="border rounded w-full py-2 px-3"
                  value={property.square_feet}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Amenities</label
              >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <div>
                  <input
                    type="checkbox"
                    id="amenity_wifi"
                    name="amenities"
                    value="Wifi"
                    className="mr-2"
                    onChange={handleAmenitiesChange}
                  />
                  <label htmlFor="amenity_wifi">Wifi</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_kitchen"
                    name="amenities"
                    value="Full Kitchen"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_kitchen">Full kitchen</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_washer_dryer"
                    name="amenities"
                    value="Washer & Dryer"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_washer_dryer">Washer & Dryer</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_free_parking"
                    name="amenities"
                    value="Free Parking"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_free_parking">Free Parking</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_pool"
                    name="amenities"
                    value="Swimming Pool"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_pool">Swimming Pool</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_hot_tub"
                    name="amenities"
                    value="Hot Tub"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_hot_tub">Hot Tub</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_24_7_security"
                    name="amenities"
                    value="24/7 Security"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_24_7_security">24/7 Security</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_wheelchair_accessible"
                    name="amenities"
                    value="Wheelchair Accessible"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_wheelchair_accessible"
                    >Wheelchair Accessible</label
                  >
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_elevator_access"
                    name="amenities"
                    value="Elevator Access"
                    onChange={handleAmenitiesChange}

                    className="mr-2"
                  />
                  <label htmlFor="amenity_elevator_access">Elevator Access</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_dishwasher"
                    name="amenities"
                    value="Dishwasher"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_dishwasher">Dishwasher</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_gym_fitness_center"
                    name="amenities"
                    value="Gym/Fitness Center"
                    onChange={handleAmenitiesChange}

                    className="mr-2"
                  />
                  <label htmlFor="amenity_gym_fitness_center"
                    >Gym/Fitness Center</label
                  >
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_air_conditioning"
                    name="amenities"
                    value="Air Conditioning"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_air_conditioning">Air Conditioning</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_balcony_patio"
                    name="amenities"
                    value="Balcony/Patio"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_balcony_patio">Balcony/Patio</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_smart_tv"
                    name="amenities"
                    value="Smart TV"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_smart_tv">Smart TV</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="amenity_coffee_maker"
                    name="amenities"
                    value="Coffee Maker"
                    className="mr-2"
                    onChange={handleAmenitiesChange}

                  />
                  <label htmlFor="amenity_coffee_maker">Coffee Maker</label>
                </div>
              </div>
            </div>

            <div className="mb-4 bg-blue-50 p-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Rates (Leave blank if not applicable)</label
              >
              <div
                className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
              >
                <div className="flex items-center">
                  <label htmlFor="weekly_rate" className="mr-2">Weekly</label>
                  <input
                    type="number"
                    id="weekly_rate"
                    name="rates.weekly"
                    className="border rounded w-full py-2 px-3"
                    onChange={handleChange}
                    value={property.rates.weekly}
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="monthly_rate" className="mr-2">Monthly</label>
                  <input
                    type="number"
                    id="monthly_rate"
                    name="rates.monthly"
                    className="border rounded w-full py-2 px-3"
                    onChange={handleChange}
                    value={property.rates.monthly}
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="nightly_rate" className="mr-2">Nightly</label>
                  <input
                    type="number"
                    id="nightly_rate"
                    name="rates.nightly"
                    className="border rounded w-full py-2 px-3"
                    onChange={handleChange}
                    value={property.rates.nightly}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="seller_name"
                className="block text-gray-700 font-bold mb-2"
                >Seller Name</label
              >
              <input
                type="text"
                id="seller_name"
                name="seller_info.name"
                className="border rounded w-full py-2 px-3"
                placeholder="Name"
                value={property.seller_info.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="seller_email"
                className="block text-gray-700 font-bold mb-2"
                >Seller Email</label
              >
              <input
                type="email"
                id="seller_email"
                name="seller_info.email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address"
                value={property.seller_info.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="seller_phone"
                className="block text-gray-700 font-bold mb-2"
                >Seller Phone</label
              >
              <input
                type="tel"
                id="seller_phone"
                name="seller_info.phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Phone"
                value={property.seller_info.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="images" className="block text-gray-700 font-bold mb-2"
                >Images (Select up to 4 images)</label
              >
              <input
                type="file"
                id="images"
                name="images"
                className="border rounded w-full py-2 px-3"
                accept="image/*"
                onChange={handleImagesChange}

                multiple
              />

      <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Selected Images</label>
              <div className="grid grid-cols-2 gap-2">
                {property.images.map((image, index) => (
                  <ImageWithRemoveButton
                    key={index}
                    src={image}
                    alt={`Selected ${index}`}
                    onRemove={() => handleRemoveImage(index)}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
            </div>
            </div>

            {showLargeImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <Image width={1920} height={1200} src={showLargeImage} alt="Large view" className="w-auto h-auto max-w-full max-h-full transition ease-in" />
            <button
              title='close'
              onClick={handleCloseLargeImage}
              className="absolute top-2 right-2 bg-gray-500 bg-opacity-50 text-white rounded-full p-1"
            >
              <FaTimes />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
            <div className="flex overflow-x-auto space-x-2">
              {property.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  width={800}
                  height={600}
                  className="w-20 h-20 object-cover cursor-pointer"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Property
              </button>
            </div>
          </form>

  )
}

export default AddPropertyform