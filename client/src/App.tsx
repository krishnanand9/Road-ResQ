import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyVehicles from "./pages/MyVehicles";
import RequestAssistance from "./pages/RequestAssistance";
import FindMechanic from "./pages/FindMechanic";
import RequestDetails from "./pages/RequestDetails";
import Profile from "./pages/Profile";
import MechanicDashboard from "./pages/MechanicDashboard";
import MechanicProfile from "./pages/MechanicProfile";
import AIDiagnosis from "./pages/AIDiagnosis";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/common/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected User Routes */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/vehicles"
              element={<MyVehicles />}
            />

            <Route
              path="/request-assistance"
              element={<RequestAssistance />}
            />

            <Route
              path="/find-mechanic"
              element={<FindMechanic />}
            />

            <Route
              path="/request/:id"
              element={<RequestDetails />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/ai-diagnosis"
              element={<AIDiagnosis />}
            />

            {/* Mechanic Routes */}
            <Route
              path="/mechanic/dashboard"
              element={<MechanicDashboard />}
            />

            <Route
              path="/mechanic/profile"
              element={<MechanicProfile />}
            />

            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={<AdminDashboard />}
            />
          </Route>
        </Route>

        {/* 404 Route */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;