import express from "express";
import dotenv from "dotenv";
import aqiRouter from "./router/aqiRouter.js";
import connectDB from "./config/connectDB.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());    
connectDB();

app.listen(process.env.PORT, () => {
    console.log("LISTENEING TO PORT:",process.env.PORT);
});

app.use("/api", aqiRouter);

