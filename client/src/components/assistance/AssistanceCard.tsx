interface Assistance {
  _id: string;
  problem: string;
  status: string;
  aiDiagnosis?: string;
  estimatedCost?: number;
  createdAt?: string;
}

interface AssistanceCardProps {
  request: Assistance;
}

const AssistanceCard = ({
  request,
}: AssistanceCardProps) => {
  const getStatusClass = () => {
    switch (request.status?.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-700";

      case "cancelled":
        return "bg-red-100 text-red-700";

      case "accepted":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold">
            Assistance Request
          </h3>

          <p className="mt-2 text-gray-600">
            {request.problem}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${getStatusClass()}`}
        >
          {request.status}
        </span>
      </div>

      {request.aiDiagnosis && (
        <div className="mt-5 rounded-lg bg-blue-50 p-4">
          <p className="text-sm font-semibold text-blue-800">
            AI Diagnosis
          </p>

          <p className="mt-1 text-sm text-blue-700">
            {request.aiDiagnosis}
          </p>
        </div>
      )}

      {request.estimatedCost !== undefined && (
        <div className="mt-4">
          <span className="text-sm text-gray-500">
            Estimated Cost
          </span>

          <p className="font-bold text-gray-900">
            ₹{request.estimatedCost}
          </p>
        </div>
      )}

      {request.createdAt && (
        <p className="mt-4 text-xs text-gray-400">
          Created:{" "}
          {new Date(request.createdAt).toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default AssistanceCard;