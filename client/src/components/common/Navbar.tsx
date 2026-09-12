import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../../services/authService";

const Navbar = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          🚗 RoadResQ
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          {user && (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-blue-600"
              >
                Dashboard
              </Link>

              <Link
                to="/vehicles"
                className="text-gray-700 hover:text-blue-600"
              >
                My Vehicles
              </Link>

              <Link
                to="/request-assistance"
                className="text-gray-700 hover:text-blue-600"
              >
                Assistance
              </Link>

              <Link
                to="/find-mechanic"
                className="text-gray-700 hover:text-blue-600"
              >
                Find Mechanic
              </Link>

              <Link
                to="/ai-diagnosis"
                className="text-gray-700 hover:text-blue-600"
              >
                AI Diagnosis
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden text-sm text-gray-600 sm:block">
                Hi, {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 font-medium text-blue-600 hover:bg-blue-50"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;