export type AssistanceStatus =
  | "Pending"
  | "Accepted"
  | "OnTheWay"
  | "Arrived"
  | "Completed"
  | "Cancelled";

export interface AssistanceLocation {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface AssistanceRequest {
  _id: string;
  user: string;
  vehicle: string;
  mechanic?: string;
  problem: string;
  location: AssistanceLocation;
  status: AssistanceStatus;
  createdAt?: string;
  updatedAt?: string;
}

export interface AssistanceData {
  vehicle: string;
  problem: string;
  location: AssistanceLocation;
}