import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const data = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("DB Connected successfully: ", data.connection.name);
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;