import { env } from "process";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import mongoose, { mongo } from "mongoose";
const uri = env.MONGODB_URI!;

let connected = false;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version


export const connect = async () => {
    mongoose.set('strictQuery', true);
    if (connected) {
        console.log("Already connected to MongoDB");

        return connected;
    }

    try{
        await mongoose.connect(uri);
        connected = true;
        console.log("Connected to MongoDB");
        return connected;

    }
    catch (error) {
        console.error("Error connecting to MongoDB");
        console.error(error);
        connected = false;
        return connected;
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