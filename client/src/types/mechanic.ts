export interface MechanicLocation {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface Mechanic {
  _id: string;
  user: string;
  shopName: string;
  services: string[];
  experience: number;
  location: MechanicLocation;
  isAvailable: boolean;
  rating?: number;
  totalReviews?: number;
  phone?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface MechanicData {
  shopName: string;
  services: string[];
  experience: number;
  location: MechanicLocation;
}

export interface MechanicAvailability {
  isAvailable: boolean;
}