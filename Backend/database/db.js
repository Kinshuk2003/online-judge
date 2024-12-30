import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


export const DBConnection = async ()=> {
    const MONGODB_URL = process.env.MONGODB_URI;
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Mongo DB Connection established");
    }catch (error)
    {
        console.log("Error Connecting to MongoDB" + error);
    }
};