import cors from "cors";
import express, { Application } from "express";
import router from "./app/modules/user/user.route";
const app: Application = express();

// application middleware
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/users", router);

export default app;
