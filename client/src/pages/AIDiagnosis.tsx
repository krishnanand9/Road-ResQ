import { useState } from "react";

import { diagnoseVehicleProblem } from "../services/aiService";

interface DiagnosisResult {
  problem: string;
  diagnosis: string;
  possibleCauses: string[];
  recommendedAction: string;
  urgency: "Low" | "Medium" | "High" | "Emergency";
}

const AIDiagnosis = () => {
  const [problem, setProblem] = useState("");
  const [result, setResult] =
    useState<DiagnosisResult | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDiagnosis = async () => {
    if (!problem.trim()) {
      setError("Please describe your vehicle problem.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const data = await diagnoseVehicleProblem(problem);

      setResult(data);
    } catch (error: any) {
      setError(
        error.response?.data?.message ||
          "Unable to diagnose the problem."
      );
    } finally {
      setLoading(false);
    }
  };

  const getUrgencyClass = () => {
    if (result?.urgency === "Emergency") {
      return "bg-red-100 text-red-700";
    }

    if (result?.urgency === "High") {
      return "bg-orange-100 text-orange-700";
    }

    if (result?.urgency === "Medium") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-green-100 text-green-700";
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="text-center">
        <div className="text-5xl">🤖</div>

        <h1 className="mt-4 text-3xl font-bold">
          AI Vehicle Diagnosis
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Describe your vehicle problem and RoadResQ AI will provide
          possible causes and recommended actions.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-white p-7 shadow-md">
        <label className="font-semibold text-gray-800">
          Describe your vehicle problem
        </label>

        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          rows={5}
          placeholder="Example: My car is not starting and I hear a clicking sound..."
          className="mt-3 w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500"
        />

        {error && (
          <div className="mt-4 rounded-lg bg-red-100 p-4 text-red-700">
            {error}
          </div>
        )}

        <button
          onClick={handleDiagnosis}
          disabled={loading}
          className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? "Analyzing Problem..."
            : "🤖 Diagnose with AI"}
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl bg-white p-7 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">
              Diagnosis Result
            </h2>

            <span
              className={`rounded-full px-4 py-2 text-sm font-bold ${getUrgencyClass()}`}
            >
              {result.urgency} Urgency
            </span>
          </div>

          <div className="mt-6 rounded-xl bg-blue-50 p-5">
            <p className="text-sm font-medium text-blue-600">
              Problem
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {result.problem}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold">
              🔍 Possible Diagnosis
            </h3>

            <p className="mt-2 text-gray-600">
              {result.diagnosis}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold">
              ⚠️ Possible Causes
            </h3>

            <ul className="mt-3 space-y-2">
              {result.possibleCauses.map((cause) => (
                <li
                  key={cause}
                  className="rounded-lg bg-gray-50 p-3 text-gray-700"
                >
                  • {cause}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl bg-green-50 p-5">
            <h3 className="font-bold text-green-800">
              🛠️ Recommended Action
            </h3>

            <p className="mt-2 text-green-700">
              {result.recommendedAction}
            </p>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            AI diagnosis is for preliminary guidance only. Always
            consult a qualified mechanic for vehicle safety issues.
          </p>
        </div>
      )}
    </div>
  );
};

export default AIDiagnosis;