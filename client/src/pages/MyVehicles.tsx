import { useEffect, useState } from "react";

import VehicleForm from "../components/vehicle/VehicleForm";
import VehicleCard from "../components/vehicle/VehicleCard";
import Loader from "../components/common/Loader";

import {
  getMyVehicles,
  deleteVehicle,
} from "../services/vehicleService";

interface Vehicle {
  _id: string;
  vehicleNumber: string;
  brand: string;
  vehicleModel: string;
  fuelType: string;
  year: number;
}

const MyVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadVehicles = async () => {
    try {
      setLoading(true);

      const response = await getMyVehicles();

      setVehicles(response.data || response.vehicles || []);
    } catch (error: any) {
      setError(
        error.response?.data?.message ||
          "Unable to load vehicles."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVehicles();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this vehicle?"
    );

    if (!confirmed) return;

    try {
      await deleteVehicle(id);

      setVehicles((previous) =>
        previous.filter((vehicle) => vehicle._id !== id)
      );
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
          "Unable to delete vehicle."
      );
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">
        My Vehicles
      </h1>

      <p className="mt-2 text-gray-600">
        Add and manage your vehicles.
      </p>

      <div className="mt-8">
        <VehicleForm onSuccess={loadVehicles} />
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">Registered Vehicles</h2>

        {error && (
          <div className="mt-5 rounded-lg bg-red-100 p-4 text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <Loader />
        ) : vehicles.length === 0 ? (
          <div className="mt-5 rounded-2xl bg-white p-10 text-center shadow-md">
            <div className="text-5xl">🚗</div>

            <h3 className="mt-4 text-xl font-bold">
              No vehicles registered
            </h3>

            <p className="mt-2 text-gray-500">
              Add your first vehicle above.
            </p>
          </div>
        ) : (
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle._id}
                vehicle={vehicle}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyVehicles;