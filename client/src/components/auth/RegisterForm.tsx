import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { registerUser } from "../../services/authService";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.password
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    try {
      setLoading(true);

      await registerUser(form);

      navigate("/dashboard");
    } catch (error: any) {
      setError(
        error.response?.data?.message ||
          "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900">
        Create Account
      </h1>

      <p className="mt-2 text-gray-500">
        Join RoadResQ today.
      </p>

      {error && (
        <div className="mt-5 rounded-lg bg-red-100 p-3 text-red-700">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
      >
        {/* Name */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Phone Number
          </label>

          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Register Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          {loading
            ? "Creating account..."
            : "Register"}
        </Button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;