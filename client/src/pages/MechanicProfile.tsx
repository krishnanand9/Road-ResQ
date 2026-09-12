import { useEffect, useState } from "react";

import {
  getMyMechanicProfile,
  updateMechanicAvailability,
} from "../services/mechanicService";

interface MechanicProfileData {
  shopName: string;
  services: string[];
  experience: number;
  isAvailable: boolean;
  location?: {
    address?: string;
  };
}

const MechanicProfile = () => {
  const [profile, setProfile] =
    useState<MechanicProfileData | null>(null);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await getMyMechanicProfile();

        setProfile(
          response.data || response.mechanic || null
        );
      } catch {
        setMessage(
          "Mechanic profile has not been created yet."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const toggleAvailability = async () => {
    if (!profile) return;

    try {
      const newStatus = !profile.isAvailable;

      await updateMechanicAvailability(newStatus);

      setProfile({
        ...profile,
        isAvailable: newStatus,
      });

      setMessage(
        `You are now ${
          newStatus ? "available" : "unavailable"
        } for requests.`
      );
    } catch {
      setMessage("Unable to update availability.");
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        Loading profile...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="rounded-2xl bg-white p-10 text-center shadow-md">
          <div className="text-5xl">🔧</div>

          <h1 className="mt-4 text-2xl font-bold">
            Mechanic Profile Not Found
          </h1>

          <p className="mt-2 text-gray-500">
            Create your mechanic profile to receive assistance requests.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold">
        Mechanic Profile
      </h1>

      {message && (
        <div className="mt-5 rounded-lg bg-blue-50 p-4 text-blue-700">
          {message}
        </div>
      )}

      <div className="mt-8 rounded-2xl bg-white p-8 shadow-md">
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-4xl">
            🔧
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            {profile.shopName}
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">
              Experience
            </p>

            <p className="mt-1 font-bold">
              {profile.experience} years
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">
              Location
            </p>

            <p className="mt-1 font-bold">
              {profile.location?.address || "Location available"}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Services
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {profile.services.map((service) => (
              <span
                key={service}
                className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={toggleAvailability}
          className={`mt-8 w-full rounded-xl px-5 py-3 font-bold text-white ${
            profile.isAvailable
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {profile.isAvailable
            ? "Set Unavailable"
            : "Set Available"}
        </button>
      </div>
    </div>
  );
};

export default MechanicProfile;