import { env } from "process";
import mongoose, { mongo } from "mongoose";


let connected = false;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version


const connect = async (): Promise<mongoose.Connection> => {
    mongoose.set('strictQuery', true);
    if (connected) {
        console.log("Already connected to MongoDB");

        return mongoose.connection;
    }

    try{
        console.log("Connecting to MongoDB usng URI: ", env.MONGODB_URI);
        await mongoose.connect(env.MONGODB_URI!);

        connected = true;
        console.log("Connected to MongoDB");
        return mongoose.connection;

    }
    catch (error) {
        console.error(error);
        connected = false;
        throw error;
    }

}

export default connect;

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