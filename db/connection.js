import { connect } from "mongoose";
import { CONFIG } from ".././src/config/credentials.js";

export const getConx = async () => {
    try {
        await connect(CONFIG.uri);
        console.log("MongoDB Connected");
    } catch(err) {
        console.log({err: err.message});
    }
}
