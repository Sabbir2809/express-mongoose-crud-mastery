import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const server = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Server is Running at http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
server();
