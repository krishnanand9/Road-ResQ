import { Router } from "express";

import protect from "../middleware/authMiddleware";

import {
  createVehicle,
  getMyVehicles,
  deleteVehicle
} from "../controllers/vehicleController";

const router = Router();

router.post("/", protect, createVehicle);

router.get("/", protect, getMyVehicles);

router.delete("/:id", protect, deleteVehicle);

export default router;