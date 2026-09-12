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

interface MechanicCardProps {
  mechanic: Mechanic;
}

const MechanicCard = ({
  mechanic,
}: MechanicCardProps) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
            🔧
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              {mechanic.shopName}
            </h2>

            <p className="text-sm text-gray-500">
              {mechanic.experience} years experience
            </p>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            mechanic.isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {mechanic.isAvailable
            ? "Available"
            : "Unavailable"}
        </span>
      </div>

      {/* Location */}
      <div className="mt-5 rounded-xl bg-gray-50 p-4">
        <p className="text-sm font-medium text-gray-500">
          📍 Location
        </p>

        <p className="mt-1 text-sm text-gray-700">
          {mechanic.location?.address ||
            "Location available"}
        </p>
      </div>

      {/* Services */}
      <div className="mt-5">
        <p className="text-sm font-medium text-gray-500">
          Services
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {mechanic.services.map((service) => (
            <span
              key={service}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Button */}
      <button
        type="button"
        disabled={!mechanic.isAvailable}
        className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {mechanic.isAvailable
          ? "Request Assistance"
          : "Currently Unavailable"}
      </button>
    </div>
  );
};

export default MechanicCard;