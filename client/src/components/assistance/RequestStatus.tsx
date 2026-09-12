interface RequestStatusProps {
  status: string;
}

const statuses = [
  "pending",
  "accepted",
  "on_the_way",
  "completed",
];

const RequestStatus = ({
  status,
}: RequestStatusProps) => {
  const currentIndex = statuses.indexOf(
    status.toLowerCase()
  );

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h3 className="text-xl font-bold">
        Request Status
      </h3>

      <div className="mt-6 space-y-4">
        {statuses.map((item, index) => {
          const completed =
            index <= currentIndex;

          return (
            <div
              key={item}
              className="flex items-center gap-4"
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full font-bold ${
                  completed
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {completed ? "✓" : index + 1}
              </div>

              <div>
                <p
                  className={`font-medium ${
                    completed
                      ? "text-blue-700"
                      : "text-gray-500"
                  }`}
                >
                  {item
                    .replace("_", " ")
                    .replace(/\b\w/g, (letter) =>
                      letter.toUpperCase()
                    )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RequestStatus;