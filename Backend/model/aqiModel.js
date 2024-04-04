import mongoose from "mongoose";

const aqiModel = mongoose.Schema({
  aqi: {
    type: Number,
    required: true,
  },
  pm2_5: {
    type: Number,
    required: true,
  },
  pm10: {
    type: Number,
    required: true,
  },
  pmCO: {
    type: Number,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("aqi", aqiModel);
