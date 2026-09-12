import { Request, Response } from "express";
import diagnoseVehicleProblem from "../services/aiService";

export const diagnoseProblem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { problem } = req.body;

    // Validate request
    if (!problem || typeof problem !== "string") {
      res.status(400).json({
        success: false,
        message: "Please provide a valid vehicle problem."
      });
      return;
    }

    // Remove unnecessary spaces
    const cleanedProblem = problem.trim();

    if (cleanedProblem.length === 0) {
      res.status(400).json({
        success: false,
        message: "Vehicle problem cannot be empty."
      });
      return;
    }

    // Call AI service
    const diagnosis = await diagnoseVehicleProblem(cleanedProblem);

    res.status(200).json({
      success: true,
      message: "Vehicle problem diagnosed successfully.",
      data: diagnosis
    });
  } catch (error) {
    console.error("❌ AI Controller Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to diagnose the vehicle problem."
    });
  }
};