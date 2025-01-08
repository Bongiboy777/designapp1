import {connect} from '@/app/lib/storage_client'
import { Property } from "@/app/models/property";
import { ObjectId } from 'mongodb';

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
        const body = await request.json();
        const property = new Property(body);
        const result = await property.save();
        return new Response(JSON.stringify(result), {status: 200});
    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({"status":"fault", "error":error}), {status: 500});
    }
}