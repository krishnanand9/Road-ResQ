import { useState } from "react";

interface LocationData {
  latitude: number;
  longitude: number;
}

const useLocation = () => {
  const [location, setLocation] =
    useState<LocationData | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const getLocation = () => {
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
      }
    );
  };

  return {
    location,
    loading,
    error,
    getLocation,
  };
};

export default useLocation;