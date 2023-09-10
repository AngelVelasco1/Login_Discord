import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
    "server": JSON.parse(process.env.SERVER),
    "uri": process.env.MONGO_URI
}