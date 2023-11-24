import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/modules/user/user.route";

// Create Express application instance
const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());

// routers
app.use("/api/users", router);

// health check root route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    message: "Assignment-2: Welcome to Express, Mongoose CRUD Mastery",
  });
});

export default app;
