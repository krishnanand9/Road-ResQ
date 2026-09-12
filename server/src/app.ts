import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoute";
import vehicleRoutes from "./routes/vehicleRoutes";
import mechanicRoutes from "./routes/mechanicRoutes";
import assistanceRoutes from "./routes/assistanceRoutes";

import errorHandler from "./middleware/errorMiddleware";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to RoadResQ API 🚗"
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "RoadResQ server is healthy 🚀"
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/vehicles", vehicleRoutes);

app.use("/api/mechanics", mechanicRoutes);

app.use("/api/assistance", assistanceRoutes);

app.use(errorHandler);

export default app;