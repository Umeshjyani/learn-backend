import mongoose from "mongoose";
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
    try {
        const connectionlnstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`/n MongoDB connected !! DB HOST: ${connectionlnstance.connection.host}`);
    } catch (error) {
        console("mongoose connection error ", error);
        process.exit(1);
    }
}

export default connectDB