import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Vehicle from "../models/Vehicle";

export const createVehicle = async (
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
      vehicleNumber,
      brand,
      model,
      fuelType,
      year
    } = req.body;

    if (
      !vehicleNumber ||
      !brand ||
      !model ||
      !fuelType ||
      !year
    ) {
      res.status(400).json({
        success: false,
        message: "All vehicle fields are required."
      });
      return;
    }

    const vehicle = await Vehicle.create({
      owner: req.userId,
      vehicleNumber,
      brand,
      model,
      fuelType,
      year
    });

    res.status(201).json({
      success: true,
      message: "Vehicle added successfully.",
      vehicle
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add vehicle."
    });
  }
};

export const getMyVehicles = async (
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

    const vehicles = await Vehicle.find({
      owner: req.userId
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: vehicles.length,
      vehicles
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch vehicles."
    });
  }
};

export const deleteVehicle = async (
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

    const vehicle = await Vehicle.findOneAndDelete({
      _id: req.params.id,
      owner: req.userId
    });

    if (!vehicle) {
      res.status(404).json({
        success: false,
        message: "Vehicle not found."
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Vehicle deleted successfully."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete vehicle."
    });
  }
};