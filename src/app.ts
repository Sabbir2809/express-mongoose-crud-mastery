import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/modules/user/user.route";
const app: Application = express();

// application middleware
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/users", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    message: "Welcome to Express, Mongoose CRUD Mastery",
  });
});

export default app;
