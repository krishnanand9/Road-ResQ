import { Link, useParams } from "react-router-dom";

const RequestDetails = () => {
  const { id } = useParams();

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold">
        Assistance Request
      </h1>

      <p className="mt-2 text-gray-600">
        Request ID: {id}
      </p>

      <div className="mt-8 rounded-2xl bg-white p-7 shadow-md">
        <h2 className="text-xl font-bold">
          Request Status
        </h2>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
            ⏳
          </div>

          <div>
            <p className="font-bold text-gray-900">
              Request Submitted
            </p>

            <p className="text-sm text-gray-500">
              Waiting for a mechanic to accept your request.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-sm text-gray-500">
            Live request tracking will be connected to the backend
            assistance system.
          </p>
        </div>
      </div>

      <Link
        to="/dashboard"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default RequestDetails;