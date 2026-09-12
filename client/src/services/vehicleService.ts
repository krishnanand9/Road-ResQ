import api from "./api";
import type { VehicleData } from "../types/vehicle";

export const createVehicle = async (data: VehicleData) => {
  const response = await api.post("/vehicles", data);
  return response.data;
};

export const getMyVehicles = async () => {
  const response = await api.get("/vehicles");
  return response.data;
};

export const deleteVehicle = async (vehicleId: string) => {
  const response = await api.delete(`/vehicles/${vehicleId}`);
  return response.data;
};