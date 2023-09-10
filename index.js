import app from "./app.js";
import {} from "./db/connection.js";
import { CONFIG } from "./src/config/credentials.js";

app.listen(CONFIG.server, () => {
    console.log(`Listening on ${CONFIG.server.hostname}:${CONFIG.server.port}`);
})