
import dotenv from "dotenv"
import { v2 as cloudinary } from 'cloudinary';
dotenv.config();
export const Cloudinary =cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



const catchError = async (next, callback, errorCallback) => {
  try {
    await callback();
  }
  catch (err) {
    if (errorCallback) {
      errorCallback(err);
    } else {
      next(err);
    }
  }
}

export default catchError;  