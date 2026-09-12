import { Link } from "react-router-dom";
import { getCurrentUser } from "../services/authService";

const Dashboard = () => {
  const user = getCurrentUser();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div>
        <p className="text-sm font-semibold text-blue-600">
          ROADRESQ DASHBOARD
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Welcome, {user?.name || "User"} 👋
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your vehicles and get roadside assistance.
        </p>
      </div>

      {/* Emergency */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 p-7 text-white shadow-lg">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              🚨 Vehicle Emergency?
            </h2>

            <p className="mt-2 text-red-50">
              Request roadside assistance and share your location.
            </p>
          </div>

          <Link
            to="/request-assistance"
            className="mt-5 inline-block rounded-xl bg-white px-6 py-3 font-bold text-red-600 md:mt-0"
          >
            Request Help
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link
          to="/vehicles"
          className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="text-4xl">🚗</div>
          <h3 className="mt-4 text-xl font-bold">My Vehicles</h3>
          <p className="mt-2 text-sm text-gray-500">
            Manage your registered vehicles.
          </p>
        </Link>

        <Link
          to="/find-mechanic"
          className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="text-4xl">🔧</div>
          <h3 className="mt-4 text-xl font-bold">Find Mechanic</h3>
          <p className="mt-2 text-sm text-gray-500">
            Find available roadside mechanics.
          </p>
        </Link>

        <Link
          to="/ai-diagnosis"
          className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="text-4xl">🤖</div>
          <h3 className="mt-4 text-xl font-bold">AI Diagnosis</h3>
          <p className="mt-2 text-sm text-gray-500">
            Understand possible vehicle problems.
          </p>
        </Link>

        <Link
          to="/profile"
          className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="text-4xl">👤</div>
          <h3 className="mt-4 text-xl font-bold">My Profile</h3>
          <p className="mt-2 text-sm text-gray-500">
            View your account information.
          </p>
        </Link>
      </div>

      {/* Quick actions */}
      <div className="mt-10 rounded-2xl bg-white p-7 shadow-md">
        <h2 className="text-2xl font-bold">Quick Actions</h2>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to="/request-assistance"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Request Assistance
          </Link>

          <Link
            to="/vehicles"
            className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50"
          >
            Manage Vehicles
          </Link>

          <Link
            to="/ai-diagnosis"
            className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50"
          >
            Check Problem with AI
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;