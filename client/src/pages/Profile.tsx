import { getCurrentUser } from "../services/authService";

const Profile = () => {
  const user = getCurrentUser();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold">My Profile</h1>

      <p className="mt-2 text-gray-600">
        Manage your RoadResQ account information.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-8 shadow-md">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-4xl">
          👤
        </div>

        <div className="mt-8 space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-500">
              Full Name
            </label>

            <p className="mt-1 text-lg font-semibold">
              {user?.name || "Not available"}
            </p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">
              Email
            </label>

            <p className="mt-1 text-lg font-semibold">
              {user?.email || "Not available"}
            </p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">
              Phone
            </label>

            <p className="mt-1 text-lg font-semibold">
              {user?.phone || "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;