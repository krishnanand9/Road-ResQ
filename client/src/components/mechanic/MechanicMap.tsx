interface MechanicMapProps {
  latitude?: number;
  longitude?: number;
}

const MechanicMap = ({
  latitude = 28.6139,
  longitude = 77.209,
}: MechanicMapProps) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-md">
      <div className="flex h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="text-5xl">📍</div>

          <h3 className="mt-3 text-xl font-bold">
            Mechanic Location
          </h3>

          <p className="mt-2 text-gray-500">
            Latitude: {latitude}
          </p>

          <p className="text-gray-500">
            Longitude: {longitude}
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Interactive map integration coming next.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MechanicMap;