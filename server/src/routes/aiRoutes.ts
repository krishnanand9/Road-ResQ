import { Router } from "express";
import diagnoseVehicleProblem from "../services/aiService";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

/**
 * POST /api/ai/diagnose
 * Diagnose a vehicle problem using AI service
 */
router.post("/diagnose", authMiddleware, async (req, res) => {
  try {
    const { problem } = req.body;

    if (!problem || typeof problem !== "string") {
      return res.status(400).json({
        success: false,
        message: "Please provide a vehicle problem."
      });
    }

    const diagnosis = await diagnoseVehicleProblem(problem);

    return res.status(200).json({
      success: true,
      data: diagnosis
    });
  } catch (error) {
    console.error("AI diagnosis error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to diagnose the vehicle problem."
    });
  }
});

export default router;