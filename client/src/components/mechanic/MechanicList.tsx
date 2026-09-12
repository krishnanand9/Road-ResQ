import MechanicCard from "./MechanicCard";

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

interface MechanicListProps {
  mechanics: Mechanic[];
}

const MechanicList = ({
  mechanics,
}: MechanicListProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mechanics.map((mechanic) => (
        <MechanicCard
          key={mechanic._id}
          mechanic={mechanic}
        />
      ))}
    </div>
  );
};

export default MechanicList;