import { Router } from "express";
import { addLocation } from "../controllers/locationController";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

router.post("/",  addLocation)
export default router;
