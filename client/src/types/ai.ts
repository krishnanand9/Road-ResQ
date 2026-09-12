export type Urgency =
  | "Low"
  | "Medium"
  | "High"
  | "Emergency";

export interface AIDiagnosis {
  problem: string;
  diagnosis: string;
  possibleCauses: string[];
  recommendedAction: string;
  urgency: Urgency;
}

export interface AIDiagnosisResponse {
  success: boolean;
  message: string;
  data: AIDiagnosis;
}