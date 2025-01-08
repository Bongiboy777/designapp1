'use client'
import React from 'react'
import { getPropertyById } from '@/app/lib/utils'
import { useParams } from 'next/navigation'
import PropertyImage from '@/components/PropertyImage'
import { ExtendedProperty } from '@/app/models/property'
import PropertyDetails from '@/components/PropertyDetails'
import { FaArrowLeft } from 'react-icons/fa'
import Loader from '@/components/Loader'
import Link from 'next/link'



const Page = () => {
  const {id} = useParams();
  const [property, setProperty] = React.useState<ExtendedProperty | null>(null);
  const [loading, setLoading] = React.useState(true);




  React.useEffect(() => {
    if(!id ||typeof(id) != "string"){
      return;
    }
    const fetchPropertyData = async () => {
      try{
        // console.log(`Client page looking htmlFor property with id: ${id}`);

        const property = await getPropertyById(id);
        // console.log(`Client page found property: ${property}`);
        setProperty(property);
      }
      catch(error){
        console.error(`Error fetching property: ${error}`);
      }
      finally{
        setLoading(false);
      }
     
    };

    fetchPropertyData();
  }, [id]);
   return loading || !property ? <Loader /> : (
    <div id="properties" className=''>
      <PropertyImage src={property.images[0]} alt={property.name} id={property.id}/>
      <section>
      <div className="container m-auto py-6 px-6">
        <Link
          href="/properties"
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Properties
        </Link>
      </div>
    </section>

    <section className="bg-blue-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        {loading || !property ? <Loader /> : <PropertyDetails property={property} />}
          

          {/* <!-- Sidebar --> */}
          <aside className="space-y-4">       
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              <i className="fas fa-bookmark mr-2"></i> Bookmark Property
            </button>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              <i className="fas fa-share mr-2"></i> Share Property
            </button>

            {/* <!-- Contact Form --> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Contact Property Manager</h3>
              <form>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='name'
                >
                  Name:
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  placeholder='Enter your name'             
                  required
                />
              </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='phone'
                  >
                    Phone:
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='phone'
                    type='text'
                    placeholder='Enter your phone number'
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message:
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                    type="submit"
                  >
                    <i className="fas fa-paper-plane mr-2"></i> Send Message
                  </button>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Page