import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MechanicLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-2xl bg-blue-600 p-6 text-white shadow-md">
          <h1 className="text-2xl font-bold">
            Mechanic Dashboard
          </h1>

          <p className="mt-1 text-blue-100">
            Manage assistance requests and help RoadResQ users.
          </p>
        </div>

        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MechanicLayout;