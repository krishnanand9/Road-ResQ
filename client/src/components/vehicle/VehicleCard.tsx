interface Vehicle {
  _id: string;
  vehicleNumber: string;
  brand: string;
  vehicleModel: string;
  fuelType: string;
  year: number;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  onDelete?: (id: string) => void;
}

const VehicleCard = ({
  vehicle,
  onDelete,
}: VehicleCardProps) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold">
            {vehicle.brand} {vehicle.vehicleModel}
          </h3>

          <p className="mt-1 text-gray-500">
            {vehicle.vehicleNumber}
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {vehicle.fuelType}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Year</p>
          <p className="font-semibold">{vehicle.year}</p>
        </div>

        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Vehicle</p>
          <p className="font-semibold">
            {vehicle.brand}
          </p>
        </div>
      </div>

      {onDelete && (
        <button
          onClick={() => onDelete(vehicle._id)}
          className="mt-5 w-full rounded-lg bg-red-50 py-2 font-medium text-red-600 hover:bg-red-100"
        >
          Delete Vehicle
        </button>
      )}
    </div>
  );
};

export default VehicleCard;