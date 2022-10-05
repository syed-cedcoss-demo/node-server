import express from "express";
import { getUser, signup } from "../controllers/userController.js";

const router = express.Router();

router.get("/test", signup);
router.post("/signup", signup);
router.get("/getUser", getUser);

export default router;
