import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const  connectDatabase = () => {
    let DB_URI= "";
    if(process.env.NODE_ENV.includes('DEVELOPMENT')) DB_URI = process.env.DB_LOCAL_URI;
    if(process.env.NODE_ENV.includes('PRODUCTION')) DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI).then((con) => {
        console.log(
          `MongoDB Database connected with HOST: ${con?.connection?.host}`
        );
    }).catch((err) => console.log(err));
};
