import { Router } from "express";
import { addLocation } from "../controllers/locationController";
const router = Router();

router.post("/", addLocation)
export default router;
