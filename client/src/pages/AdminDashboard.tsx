import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div>
        <p className="font-semibold text-purple-600">
          ADMIN PANEL
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          RoadResQ Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Monitor the RoadResQ platform.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="text-3xl">👥</div>

          <p className="mt-4 text-sm text-gray-500">
            Total Users
          </p>

          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="text-3xl">🔧</div>

          <p className="mt-4 text-sm text-gray-500">
            Mechanics
          </p>

          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="text-3xl">🚨</div>

          <p className="mt-4 text-sm text-gray-500">
            Assistance Requests
          </p>

          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="text-3xl">🚗</div>

          <p className="mt-4 text-sm text-gray-500">
            Vehicles
          </p>

          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-white p-7 shadow-md">
        <h2 className="text-xl font-bold">
          Administration
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <button className="rounded-xl border p-5 text-left hover:bg-gray-50">
            <span className="text-2xl">👥</span>
            <h3 className="mt-3 font-bold">Manage Users</h3>
            <p className="mt-1 text-sm text-gray-500">
              View and manage registered users.
            </p>
          </button>

          <button className="rounded-xl border p-5 text-left hover:bg-gray-50">
            <span className="text-2xl">🔧</span>
            <h3 className="mt-3 font-bold">Manage Mechanics</h3>
            <p className="mt-1 text-sm text-gray-500">
              Review mechanic profiles.
            </p>
          </button>

          <button className="rounded-xl border p-5 text-left hover:bg-gray-50">
            <span className="text-2xl">🚨</span>
            <h3 className="mt-3 font-bold">
              Assistance Requests
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Monitor roadside requests.
            </p>
          </button>
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

export default AdminDashboard;