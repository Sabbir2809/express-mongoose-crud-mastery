import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();

// application middleware
app.use(express.json());
app.use(cors());

// application routes
// app.use("/api/users");

// health check
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    message: "Welcome to Express, Mongoose CRUD Mastery",
  });
});

export default app;
