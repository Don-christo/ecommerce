import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "morgan";
import apiRoutes from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/api", apiRoutes);

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err: any, _req: Request, res: Response) => {
  console.error("Unhandled error:", err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server error" });
});

app.listen(port, () => {
  console.log(`\nLocal baseUrl, use @ http://localhost:${port}/api/`);
});
