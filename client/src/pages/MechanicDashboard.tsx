import { Link } from "react-router-dom";

const MechanicDashboard = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div>
        <p className="font-semibold text-blue-600">
          MECHANIC PORTAL
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Mechanic Dashboard 🔧
        </h1>

        <p className="mt-2 text-gray-600">
          Manage assistance requests and your availability.
        </p>
      </div>

      <div className="mt-8 rounded-2xl bg-green-50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-green-800">
              Availability
            </h2>

            <p className="mt-1 text-sm text-green-700">
              You are currently available for assistance requests.
            </p>
          </div>

          <div className="h-4 w-4 rounded-full bg-green-500" />
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <p className="text-sm text-gray-500">
            Pending Requests
          </p>

          <p className="mt-2 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <p className="text-sm text-gray-500">
            Active Requests
          </p>

          <p className="mt-2 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <p className="text-sm text-gray-500">
            Completed
          </p>

          <p className="mt-2 text-4xl font-bold">0</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-white p-7 shadow-md">
        <h2 className="text-xl font-bold">
          Mechanic Actions
        </h2>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to="/mechanic/profile"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            My Mechanic Profile
          </Link>

          <Link
            to="/dashboard"
            className="rounded-lg border px-5 py-3 font-semibold hover:bg-gray-50"
          >
            User Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MechanicDashboard;