import AQI from "../model/aqiModel.js";

/**
 * GET
 * AQI Results
 */

export const getAQI = async(req, res) => {
    const data = await AQI.find({});
    res.status(200).json({status: true, message: "Data from Database", data: data});
};

/*
POST
SET AQI Results
*/

export const setAQI = async (req, res) => {
  const { aqi, pm2_5, pm10, pmCO, temperature, humidity } = req.body;

  if (!aqi || !pm2_5 || !pm10 || !pmCO || !temperature || !humidity)
    return res.status(400).json("All fields required");

  const aqiData = await AQI.create({
    aqi,
    pm2_5,
    pm10,
    pmCO,
    temperature,
    humidity,
  });
  res
    .status(200)
    .json({
      status: true,
      message: "data send to the Database successfully",
      data: aqiData,
    });
};
