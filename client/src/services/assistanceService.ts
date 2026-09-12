import api from "./api";
import type { AssistanceData } from "../types/assistance";

export const createAssistanceRequest = async (
  data: AssistanceData
) => {
  const response = await api.post(
    "/assistance",
    data
  );

  return response.data;
};

export const getMyAssistanceRequests = async () => {
  const response = await api.get("/assistance");
  return response.data;
};

export const updateAssistanceStatus = async (
  requestId: string,
  status: string
) => {
  const response = await api.patch(
    `/assistance/${requestId}/status`,
    { status }
  );

  return response.data;
};