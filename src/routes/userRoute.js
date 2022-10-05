import express from "express";
import { signup } from "../controllers/userController.js";

const router = express.Router();

router.get("/test", signup);
router.get("/signup", signup);

export default router;
