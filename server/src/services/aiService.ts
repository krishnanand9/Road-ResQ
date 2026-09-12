interface AIDiagnosisResult {
  problem: string;
  diagnosis: string;
  possibleCauses: string[];
  recommendedAction: string;
  urgency: "Low" | "Medium" | "High" | "Emergency";
}

const diagnoseVehicleProblem = async (
  problem: string
): Promise<AIDiagnosisResult> => {
  const text = problem.toLowerCase();

  // Engine not starting
  if (
    text.includes("not starting") ||
    text.includes("won't start") ||
    text.includes("wont start") ||
    text.includes("engine")
  ) {
    return {
      problem,
      diagnosis: "Possible engine starting problem",
      possibleCauses: [
        "Weak or dead battery",
        "Starter motor problem",
        "Fuel supply issue",
        "Ignition system problem"
      ],
      recommendedAction:
        "Check the battery and fuel supply. If the vehicle still does not start, contact a nearby mechanic.",
      urgency: "High"
    };
  }

  // Battery problem
  if (
    text.includes("battery") ||
    text.includes("dead battery") ||
    text.includes("battery dead")
  ) {
    return {
      problem,
      diagnosis: "Possible battery failure",
      possibleCauses: [
        "Battery discharged",
        "Old or damaged battery",
        "Loose battery connection",
        "Alternator problem"
      ],
      recommendedAction:
        "Try a jump start if safe. If the vehicle does not start, request battery assistance.",
      urgency: "High"
    };
  }

  // Flat tyre
  if (
    text.includes("tyre") ||
    text.includes("tire") ||
    text.includes("puncture") ||
    text.includes("flat")
  ) {
    return {
      problem,
      diagnosis: "Possible flat or punctured tyre",
      possibleCauses: [
        "Puncture",
        "Low tyre pressure",
        "Damaged tyre",
        "Valve leakage"
      ],
      recommendedAction:
        "Avoid driving on the damaged tyre. Request roadside tyre repair or replacement.",
      urgency: "Medium"
    };
  }

  // Fuel problem
  if (
    text.includes("fuel") ||
    text.includes("petrol") ||
    text.includes("diesel") ||
    text.includes("empty tank")
  ) {
    return {
      problem,
      diagnosis: "Possible fuel shortage",
      possibleCauses: [
        "Empty fuel tank",
        "Incorrect fuel level reading",
        "Fuel delivery problem"
      ],
      recommendedAction:
        "Check the fuel level. If the tank is empty, request fuel delivery assistance.",
      urgency: "Medium"
    };
  }

  // Overheating
  if (
    text.includes("overheat") ||
    text.includes("overheating") ||
    text.includes("hot engine") ||
    text.includes("temperature")
  ) {
    return {
      problem,
      diagnosis: "Possible engine overheating",
      possibleCauses: [
        "Low coolant level",
        "Cooling system problem",
        "Radiator issue",
        "Thermostat failure"
      ],
      recommendedAction:
        "Stop the vehicle safely and allow the engine to cool. Do not open the radiator cap while the engine is hot. Contact roadside assistance.",
      urgency: "Emergency"
    };
  }

  // Oil problem
  if (
    text.includes("oil") ||
    text.includes("engine oil") ||
    text.includes("oil leak")
  ) {
    return {
      problem,
      diagnosis: "Possible engine oil problem",
      possibleCauses: [
        "Low engine oil",
        "Oil leakage",
        "Oil filter problem",
        "Engine lubrication issue"
      ],
      recommendedAction:
        "Stop the vehicle if the oil warning light is on or there is significant leakage. Request mechanic assistance.",
      urgency: "High"
    };
  }

  // Brake problem
  if (
    text.includes("brake") ||
    text.includes("brakes") ||
    text.includes("braking")
  ) {
    return {
      problem,
      diagnosis: "Possible brake system problem",
      possibleCauses: [
        "Low brake fluid",
        "Worn brake pads",
        "Brake system leakage",
        "Brake component failure"
      ],
      recommendedAction:
        "Do not continue driving if braking performance is unsafe. Request immediate roadside assistance.",
      urgency: "Emergency"
    };
  }

  // Generic diagnosis
  return {
    problem,
    diagnosis: "Vehicle problem requires further inspection",
    possibleCauses: [
      "Mechanical failure",
      "Electrical problem",
      "Fuel system problem",
      "Sensor or component failure"
    ],
    recommendedAction:
      "Provide more details about the vehicle problem or request a nearby mechanic for inspection.",
    urgency: "Medium"
  };
};

export default diagnoseVehicleProblem;