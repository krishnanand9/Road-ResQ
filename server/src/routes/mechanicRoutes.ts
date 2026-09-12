import { Router } from "express";

import protect from "../middleware/authMiddleware";

import {
  createMechanicProfile,
  getMechanicProfile,
  updateAvailability,
  getAvailableMechanics
} from "../controllers/mechanicController";

const router = Router();

router.post("/profile", protect, createMechanicProfile);

router.get("/profile", protect, getMechanicProfile);

router.patch(
  "/availability",
  protect,
  updateAvailability
);

router.get(
  "/available",
  protect,
  getAvailableMechanics
);

export default router;