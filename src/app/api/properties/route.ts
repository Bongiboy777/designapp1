import getUser from '@/app/lib/getUser';
import {connect} from '@/app/lib/storage_client'
import { Property } from "@/app/models/property";
import { ObjectId } from 'mongodb';
import { getServerSession} from 'next-auth'
import { redirect } from 'next/dist/server/api-utils';

export const GET = async (request: Request) => {
    // // console.log("Get request")
    try {
        await connect();
        if(request.url.includes("id=")){
            const id = request.url.split("id=")[1];
            // console.log(`Server calling for property with id: ${id}`);
            
            const property = await Property.findById(new ObjectId(id));
            return new Response(JSON.stringify(property), {status: 200});
        }
        else{
            // console.log("Server calling for all properties");
            const properties = await Property.find();
            return new Response(JSON.stringify(properties), {status: 200});
        }
    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({"status":"fault", "error":error}), {status: 500});
    }
}

export const POST = async (request: Request) => {
    try{
        await connect();
        const formData = await request.formData();
        const amenities = formData.getAll("amenities");
        console.log("form data", formData);
        const user = await getUser();

       
        
        const propertyData = {
            name: formData.get("name") as string,
            type: formData.get("type") as string,
            description: formData.get("description") as string,
            location: {
            street: formData.get("location.street") as string,
            city: formData.get("location.city") as string,
            state: formData.get("location.state") as string,
            zipcode: formData.get("location.zipcode") as string,
            },
            beds: parseInt(formData.get("beds") as string, 10),
            baths: parseInt(formData.get("baths") as string, 10),
            square_feet: parseInt(formData.get("square_feet") as string, 10),
            amenities: amenities,
            rates: {
            weekly: parseInt(formData.get("rates.weekly") as string, 10),
            monthly: parseInt(formData.get("rates.monthly") as string, 10),
            nightly: parseInt(formData.get("rates.nightly") as string, 10),
            },
            images: formData.getAll("images  "),
            seller_info: {
            name: formData.get("seller_info.name") as string,
            email: formData.get("seller_info.email") as string,
            phone: formData.get("seller_info.phone") as string,
            owner: user.email
            },
        };

        console.log("property data", propertyData);
        const property = new Property(propertyData);
        console.log("property", property);
        property.save();
        return Response.redirect(`/properties/${property._id}`);

    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({"status":"failed to add property", "error":error}), {status: 500});
    }
}