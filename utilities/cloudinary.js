//const cloudinary = require("cloudinary").v2;
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { config } from "dotenv";

//Load config
dotenv.config({ path: "./config/config.env" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;
