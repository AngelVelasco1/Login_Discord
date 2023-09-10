import { Router } from "express";

export const storageHome = Router();

storageHome.get("/", (req, res) => {
    res.send("Home")
})



