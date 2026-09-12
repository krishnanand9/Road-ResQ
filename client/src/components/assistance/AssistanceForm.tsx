import { useEffect, useState } from "react";
import type { FormEvent } from "react";

import Button from "../common/Button";
import {
  createAssistanceRequest,
} from "../../services/assistanceService";

import {
  getMyVehicles,
} from "../../services/vehicleService";

interface Vehicle {
  _id: string;
  vehicleNumber: string;
  brand: string;
  vehicleModel: string;
}

const AssistanceForm = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [vehicleId, setVehicleId] = useState("");

  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [loadingVehicles, setLoadingVehicles] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Get user's vehicles
  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const response = await getMyVehicles();

        const vehicleData =
          response.data ||
          response.vehicles ||
          [];

        setVehicles(vehicleData);

        if (vehicleData.length > 0) {
          setVehicleId(vehicleData[0]._id);
        }
      } catch (error: any) {
        setError(
          error.response?.data?.message ||
            "Unable to load your vehicles."
        );
      } finally {
        setLoadingVehicles(false);
      }
    };

    loadVehicles();
  }, []);

  // Get current location
  const getCurrentLocation = () => {
    setError("");

    if (!navigator.geolocation) {
      setError(
        "Geolocation is not supported by your browser."
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          address: "Current location",
        });

        setMessage("Current location detected successfully.");
      },
      () => {
        setError(
          "Unable to access your location. Please allow location permission."
        );
      }
    );
  };

  // Submit assistance request
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!vehicleId) {
      setError("Please select a vehicle.");
      return;
    }

    if (!problem.trim()) {
      setError("Please describe your vehicle problem.");
      return;
    }

    if (
      location.latitude === 0 &&
      location.longitude === 0
    ) {
      setError(
        "Please detect your current location before requesting assistance."
      );
      return;
    }

    try {
      setLoading(true);

      await createAssistanceRequest({
        vehicle: vehicleId,
        problem: problem.trim(),
        location,
      });

      setMessage(
        "Assistance request created successfully!"
      );

      setProblem("");
    } catch (error: any) {
      setError(
        error.response?.data?.message ||
          "Unable to create assistance request."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-lg md:p-8"
    >
      <h2 className="text-2xl font-bold text-gray-900">
        Request Assistance
      </h2>

      <p className="mt-2 text-gray-500">
        Provide your vehicle and problem details.
      </p>

      {/* Success message */}
      {message && (
        <div className="mt-5 rounded-lg bg-green-100 p-4 text-green-700">
          {message}
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="mt-5 rounded-lg bg-red-100 p-4 text-red-700">
          {error}
        </div>
      )}

      <div className="mt-6 space-y-5">

        {/* Vehicle */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Select Vehicle
          </label>

          {loadingVehicles ? (
            <p className="rounded-lg bg-gray-50 p-3 text-gray-500">
              Loading vehicles...
            </p>
          ) : vehicles.length === 0 ? (
            <div className="rounded-lg bg-yellow-50 p-4 text-yellow-700">
              You have not added any vehicle yet.
            </div>
          ) : (
            <select
              value={vehicleId}
              onChange={(e) =>
                setVehicleId(e.target.value)
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              required
            >
              {vehicles.map((vehicle) => (
                <option
                  key={vehicle._id}
                  value={vehicle._id}
                >
                  {vehicle.vehicleNumber} -{" "}
                  {vehicle.brand} {vehicle.vehicleModel}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Problem */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            What happened?
          </label>

          <textarea
            value={problem}
            onChange={(e) =>
              setProblem(e.target.value)
            }
            placeholder="Example: My car is not starting..."
            rows={5}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Current Location
          </label>

          <div className="rounded-lg bg-gray-50 p-4">
            {location.latitude !== 0 &&
            location.longitude !== 0 ? (
              <div>
                <p className="font-medium text-green-700">
                  📍 Location detected
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Latitude: {location.latitude.toFixed(6)}
                </p>

                <p className="text-sm text-gray-500">
                  Longitude: {location.longitude.toFixed(6)}
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Your location has not been detected yet.
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={getCurrentLocation}
            className="mt-3 rounded-lg border border-blue-600 px-4 py-2 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            📍 Detect My Location
          </button>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={
            loading ||
            loadingVehicles ||
            vehicles.length === 0
          }
          className="w-full"
        >
          {loading
            ? "Requesting Assistance..."
            : "🚨 Request Assistance"}
        </Button>
      </div>
    </form>
  );
};

export default AssistanceForm;