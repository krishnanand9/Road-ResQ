import {
  createContext,
  useContext,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

interface Location {
  latitude: number;
  longitude: number;
  address?: string;
}

interface LocationContextType {
  location: Location | null;
  loading: boolean;
  error: string;
  getLocation: () => void;
}

const LocationContext =
  createContext<LocationContextType | undefined>(
    undefined
  );

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider = ({
  children,
}: LocationProviderProps) => {
  const [location, setLocation] =
    useState<Location | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const getLocation = (): void => {
    if (!navigator.geolocation) {
      setError(
        "Geolocation is not supported by your browser."
      );
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setLoading(false);
      },
      (error) => {
        setLoading(false);

        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError(
              "Location permission was denied."
            );
            break;

          case error.POSITION_UNAVAILABLE:
            setError(
              "Location information is unavailable."
            );
            break;

          case error.TIMEOUT:
            setError(
              "Location request timed out."
            );
            break;

          default:
            setError(
              "Unable to get your location."
            );
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        loading,
        error,
        getLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextType => {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error(
      "useLocation must be used inside LocationProvider"
    );
  }

  return context;
};

export default LocationContext;