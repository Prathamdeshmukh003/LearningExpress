import dotenv from "dotenv";

dotenv.config();//It loads environment variables from .env file

export const PORT = process.env.PORT || 3000;//Defines a PORT variable
