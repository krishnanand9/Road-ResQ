import { Response } from "express";

import { AuthRequest } from "../middleware/authMiddleware";
import AssistanceRequest from "../models/AssistanceRequest";
import Vehicle from "../models/Vehicle";

export const createAssistanceRequest = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({
        success: false,
        message: "Unauthorized."
      });
      return;
    }

    const {
      vehicleId,
      problem,
      latitude,
      longitude
    } = req.body;

    if (
      !vehicleId ||
      !problem ||
      latitude === undefined ||
      longitude === undefined
    ) {
      res.status(400).json({
        success: false,
        message: "Vehicle, problem and location are required."
      });
      return;
    }

    const vehicle = await Vehicle.findOne({
      _id: vehicleId,
      owner: req.userId
    });

    if (!vehicle) {
      res.status(404).json({
        success: false,
        message: "Vehicle not found."
      });
      return;
    }

    const request = await AssistanceRequest.create({
      user: req.userId,
      vehicle: vehicleId,
      problem,
      location: {
        latitude,
        longitude
      },
      status: "pending"
    });

    const populatedRequest =
      await AssistanceRequest.findById(request._id)
        .populate("vehicle")
        .populate("user", "name phone");

    res.status(201).json({
      success: true,
      message: "Roadside assistance request created.",
      request: populatedRequest
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create assistance request."
    });
  }
};

export const getMyAssistanceRequests = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({
        success: false,
        message: "Unauthorized."
      });
      return;
    }

    const requests = await AssistanceRequest.find({
      user: req.userId
    })
      .populate("vehicle")
      .populate("mechanic")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: requests.length,
      requests
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch assistance requests."
    });
  }
};

export const updateAssistanceStatus = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({
        success: false,
        message: "Unauthorized."
      });
      return;
    }

    const { status } = req.body;

    const allowedStatuses = [
      "pending",
      "accepted",
      "on_the_way",
      "arrived",
      "in_progress",
      "completed",
      "cancelled"
    ];

    if (!allowedStatuses.includes(status)) {
      res.status(400).json({
        success: false,
        message: "Invalid assistance status."
      });
      return;
    }

    const request = await AssistanceRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
      .populate("vehicle")
      .populate("mechanic");

    if (!request) {
      res.status(404).json({
        success: false,
        message: "Assistance request not found."
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Assistance status updated.",
      request
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update assistance status."
    });
  }
};