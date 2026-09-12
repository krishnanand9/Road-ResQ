import api from "./api";
import type { AIDiagnosis } from "../types/ai";

export const diagnoseVehicleProblem = async (
  problem: string
): Promise<AIDiagnosis> => {
  const response = await api.post(
    "/ai/diagnose",
    { problem }
  );

  return response.data.data;
};