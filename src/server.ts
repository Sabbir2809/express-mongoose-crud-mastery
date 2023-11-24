import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

// main server
const server = async () => {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Server is Running at http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
server();
