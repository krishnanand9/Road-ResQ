import { useEffect, useState } from "react";

import MechanicList from "../components/mechanic/MechanicList";
import Loader from "../components/common/Loader";

import { getAvailableMechanics } from "../services/mechanicService";

interface Mechanic {
  _id: string;
  shopName: string;
  services: string[];
  experience: number;
  isAvailable: boolean;
  location?: {
    latitude: number;
    longitude: number;
    address?: string;
  };
}

const FindMechanic = () => {
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMechanics = async () => {
      try {
        const response = await getAvailableMechanics();

        setMechanics(
          response.data || response.mechanics || []
        );
      } catch (error: any) {
        setError(
          error.response?.data?.message ||
            "Unable to load mechanics."
        );
      } finally {
        setLoading(false);
      }
    };

    loadMechanics();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div>
        <p className="font-semibold text-blue-600">
          ROADSIDE NETWORK
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Find a Nearby Mechanic
        </h1>

        <p className="mt-2 text-gray-600">
          Discover mechanics available to help you.
        </p>
      </div>

      {error && (
        <div className="mt-6 rounded-lg bg-red-100 p-4 text-red-700">
          {error}
        </div>
      )}

      {loading ? (
        <Loader />
      ) : mechanics.length === 0 ? (
        <div className="mt-8 rounded-2xl bg-white p-10 text-center shadow-md">
          <div className="text-5xl">🔧</div>

          <h2 className="mt-4 text-xl font-bold">
            No mechanics available
          </h2>

          <p className="mt-2 text-gray-500">
            Please try again later.
          </p>
        </div>
      ) : (
        <div className="mt-8">
          <MechanicList mechanics={mechanics} />
        </div>
      )}
    </div>
  );
};

export default FindMechanic;