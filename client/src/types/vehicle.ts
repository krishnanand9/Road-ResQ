export type FuelType =
  | "Petrol"
  | "Diesel"
  | "Electric"
  | "CNG"
  | "Hybrid";

export interface Vehicle {
  _id: string;
  owner: string;
  vehicleNumber: string;
  brand: string;
  vehicleModel: string;
  fuelType: FuelType;
  year: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface VehicleData {
  vehicleNumber: string;
  brand: string;
  vehicleModel: string;
  fuelType: FuelType;
  year: number;
}