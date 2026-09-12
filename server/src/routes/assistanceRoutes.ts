import { Router } from "express";

import protect from "../middleware/authMiddleware";

import {
  createAssistanceRequest,
  getMyAssistanceRequests,
  updateAssistanceStatus
} from "../controllers/assistanceController";

const router = Router();

router.post("/", protect, createAssistanceRequest);

router.get(
  "/my-requests",
  protect,
  getMyAssistanceRequests
);

router.patch(
  "/:id/status",
  protect,
  updateAssistanceStatus
);

export default router;