import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

import Button from "../common/Button";
import { createVehicle } from "../../services/vehicleService";
import type { VehicleData } from "../../types/vehicle";

interface VehicleFormProps {
  onSuccess?: () => void;
}

const VehicleForm = ({ onSuccess }: VehicleFormProps) => {
  const [form, setForm] = useState<VehicleData>({
    vehicleNumber: "",
    brand: "",
    vehicleModel: "",
    fuelType: "Petrol",
    year: new Date().getFullYear(),
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "year"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setMessage("");

    try {
      setLoading(true);

      await createVehicle(form);

      setMessage("Vehicle added successfully.");

      setForm({
        vehicleNumber: "",
        brand: "",
        vehicleModel: "",
        fuelType: "Petrol",
        year: new Date().getFullYear(),
      });

      onSuccess?.();
    } catch (error: any) {
      setMessage(
        error.response?.data?.message ||
          "Unable to add vehicle."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-md"
    >
      <h2 className="text-2xl font-bold">
        Add Your Vehicle
      </h2>

      {message && (
        <div className="mt-4 rounded-lg bg-blue-50 p-3 text-blue-700">
          {message}
        </div>
      )}

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <input
          name="vehicleNumber"
          value={form.vehicleNumber}
          onChange={handleChange}
          placeholder="Vehicle Number"
          className="rounded-lg border px-4 py-3"
          required
        />

        <input
          name="brand"
          value={form.brand}
          onChange={handleChange}
          placeholder="Brand e.g. Toyota"
          className="rounded-lg border px-4 py-3"
          required
        />

        <input
          name="vehicleModel"
          value={form.vehicleModel}
          onChange={handleChange}
          placeholder="Model e.g. Fortuner"
          className="rounded-lg border px-4 py-3"
          required
        />

        <select
          name="fuelType"
          value={form.fuelType}
          onChange={handleChange}
          className="rounded-lg border px-4 py-3"
        >
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Electric</option>
          <option>CNG</option>
          <option>Hybrid</option>
        </select>

        <input
          name="year"
          type="number"
          value={form.year}
          onChange={handleChange}
          className="rounded-lg border px-4 py-3"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="mt-5"
      >
        {loading ? "Adding..." : "Add Vehicle"}
      </Button>
    </form>
  );
};

export default VehicleForm;