import { Response } from "express";

import { AuthRequest } from "../middleware/authMiddleware";
import Mechanic from "../models/Mechanic";
import User from "../models/User";

export const createMechanicProfile = async (
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
      shopName,
      services,
      experience,
      latitude,
      longitude
    } = req.body;

    if (
      !shopName ||
      !services ||
      experience === undefined ||
      latitude === undefined ||
      longitude === undefined
    ) {
      res.status(400).json({
        success: false,
        message: "All mechanic fields are required."
      });
      return;
    }

    const existingMechanic = await Mechanic.findOne({
      user: req.userId
    });

    if (existingMechanic) {
      res.status(409).json({
        success: false,
        message: "Mechanic profile already exists."
      });
      return;
    }

    const mechanic = await Mechanic.create({
      user: req.userId,
      shopName,
      services,
      experience,
      location: {
        latitude,
        longitude
      }
    });

    await User.findByIdAndUpdate(req.userId, {
      role: "mechanic"
    });

    res.status(201).json({
      success: true,
      message: "Mechanic profile created successfully.",
      mechanic
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create mechanic profile."
    });
  }
};

export const getMechanicProfile = async (
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

    const mechanic = await Mechanic.findOne({
      user: req.userId
    }).populate("user", "name email phone");

    if (!mechanic) {
      res.status(404).json({
        success: false,
        message: "Mechanic profile not found."
      });
      return;
    }

    res.status(200).json({
      success: true,
      mechanic
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch mechanic profile."
    });
  }
};

export const updateAvailability = async (
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

    const { isAvailable } = req.body;

    if (typeof isAvailable !== "boolean") {
      res.status(400).json({
        success: false,
        message: "isAvailable must be true or false."
      });
      return;
    }

    const mechanic = await Mechanic.findOneAndUpdate(
      { user: req.userId },
      { isAvailable },
      { new: true }
    );

    if (!mechanic) {
      res.status(404).json({
        success: false,
        message: "Mechanic profile not found."
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Availability updated.",
      mechanic
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update availability."
    });
  }
};

export const getAvailableMechanics = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const mechanics = await Mechanic.find({
      isAvailable: true,
      verificationStatus: "verified"
    }).populate("user", "name phone");

    res.status(200).json({
      success: true,
      count: mechanics.length,
      mechanics
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch mechanics."
    });
  }
};