import { Router } from "express";

export const storageDashboard = Router();   

storageDashboard.get("/dashboard", (req, res) => {
    res.send("dashboard")
})
