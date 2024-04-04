import express from "express";
import { getAQI } from "../controller/aqiController.js";

const router = express.Router(); 

router.route("/getaqi").get(getAQI);

export default router;