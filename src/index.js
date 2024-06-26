import dotenv from 'dotenv'
import connectDB from './db/Index.js'

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server on running on port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("Mongo db connection failed! ", error)
    })







/*  first approch
import express from 'express'
const app = express();
; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("errror", () => {
            console.log("Error");
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`App is listeing on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);

    }
})()
*/