import { env } from "process";
import mongoose, { mongo } from "mongoose";

let connected = false;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version


export const connect = async (): Promise<mongoose.Connection> => {
    mongoose.set('strictQuery', true);
    
    if (connected) {
        console.log("Already connected to MongoDB");
        if(mongoose.connection.name !== 'Properties'){
        }
        return mongoose.connection;
    }

    try{
        console.log("Connecting to MongoDB usng URI: ", env.MONGODB_URI);
        const mongooseObject = await mongoose.connect(env.MONGODB_URI!);
        await mongoose.connection.useDb('Properties');
        
        if (!mongooseObject) {
            throw new Error("Failed to connect to MongoDB");
        }
        connected = true;
        console.log("Connected to MongoDB");
        const connections = await mongoose.connection.listCollections();
        console.log("Collections: ", connections);

        console.log("Database Name: ", mongoose.connection.name);
        return mongoose.connection;

    }
    catch (error) {
        console.error(error);
        connected = false;
        throw error;
    }

}



// export const addProperty = async (property: any) => {
//   const db = mongoose.db("property");
//   const collection = db.collection("Properties");
//   const result = await collection.insertOne(property);
//   return result;
// }

// export const getPropertyById = async (id: string) => {
//   const db = client.db("property");
//   const collection = db.collection("Properties");
//   const result = await collection.findOne({ _id: new ObjectId(id) });
//   return result;
// }

// export const removePropertyById = async (id: string) => {
//     const db = client.db("property");
//     const collection = db.collection("Properties");
//     const result = await collection.deleteOne({ _id: new ObjectId(id) });
//     return result;
//   }