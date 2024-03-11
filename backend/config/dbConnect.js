import mongoose from "mongoose";

<<<<<<< HEAD
import dotenv from 'dotenv';

dotenv.config();
export const connectDatabase = () => {
//  const DB_URI = process.env.DB_LOCAL_URI ;
//  if (process.env.NODE_ENV === 'DEVELOPMENT') DB_URI = process.env.DB_LOCAL_URI;
// if (process.env.NODE_ENV === 'PRODUCTION') DB_URI = process.env.DB_URI;
console.log(process.env.DB_LOCAL_URI);
  mongoose.connect(process.env.DB_LOCAL_URI).then((con) => {
    console.log(
      `MongoDB Database connected with HOST: ${con?.connection?.host}`
    );
  }).catch ((error) => {
    console.log(`can not connect to database, ${error}`);
  });
=======
export const  connectDatabase = () => {
    // const DB_URI=;
    // if(process.env.NODE_ENV === 'DEVELOPMENT') DB_URI = process.env.DB_LOCAL_URI;
    // if(process.env.NODE_ENV === 'PRODUCTION') DB_URI = process.env.DB_URI;
    mongoose.connect(process.env.DB_LOCAL_URI).then((con) => {
        console.log(
          `MongoDB Database connected with HOST: ${con?.connection?.host}`
        );
    }).catch((err) => console.log(err));
>>>>>>> f30ee40fc6ef92caa6b5a8283a22baaad6b8c87b
};