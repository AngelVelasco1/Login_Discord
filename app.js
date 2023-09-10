import express from "express";
import ejs from "ejs";
import session from "express-session";
import path from "path";
import { storageHome } from "./src/routes/home.js";
import { storageLogin } from "./src/routes/login.js";
import { storageDashboard } from "./src/routes/dashboard.js";

const app = express();
app.use(express.json());
app.use(express.text());

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

app.use("/app", storageHome)
app.use("/app/auth", storageLogin)
app.use("/app", storageDashboard)

app.use((req, res) => {
    res.status(404).send("Route Not Found")
});

export default app;