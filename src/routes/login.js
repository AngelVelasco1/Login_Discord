import { Router } from "express";

export const storageLogin = Router();

storageLogin.get("/login", (req, res) => {
    res.send("login")
})
