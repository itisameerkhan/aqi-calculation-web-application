import express from "express";
import { getAQI, setAQI } from "../controller/aqiController.js";

const router = express.Router(); 

router.route("/getaqi").get(getAQI);

router.route("/setaqi").post(setAQI);

export default router;