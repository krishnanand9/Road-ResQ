import api from "./api";
import type { MechanicData } from "../types/mechanic";

export const createMechanicProfile = async (
  data: MechanicData
) => {
  const response = await api.post(
    "/mechanics",
    data
  );

  return response.data;
};

export const getMyMechanicProfile = async () => {
  const response = await api.get("/mechanics/me");
  return response.data;
};

export const getAvailableMechanics = async () => {
  const response = await api.get(
    "/mechanics/available"
  );

  return response.data;
};

export const updateMechanicAvailability = async (
  isAvailable: boolean
) => {
  const response = await api.patch(
    "/mechanics/availability",
    { isAvailable }
  );

  return response.data;
};