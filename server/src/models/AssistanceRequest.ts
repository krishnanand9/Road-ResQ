import mongoose, { Document, Schema } from "mongoose";

export type AssistanceStatus =
  | "pending"
  | "accepted"
  | "on_the_way"
  | "arrived"
  | "in_progress"
  | "completed"
  | "cancelled";

export interface IAssistanceRequest extends Document {
  user: mongoose.Types.ObjectId;
  vehicle: mongoose.Types.ObjectId;
  mechanic?: mongoose.Types.ObjectId;

  problem: string;

  aiDiagnosis?: {
    possibleProblem: string;
    recommendedService: string;
    urgency: string;
    suggestedAction: string;
  };

  location: {
    latitude: number;
    longitude: number;
  };

  status: AssistanceStatus;

  estimatedCost?: number;

  createdAt: Date;
  updatedAt: Date;
}

const assistanceRequestSchema =
  new Schema<IAssistanceRequest>(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      },

      vehicle: {
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true
      },

      mechanic: {
        type: Schema.Types.ObjectId,
        ref: "Mechanic"
      },

      problem: {
        type: String,
        required: true,
        trim: true
      },

      aiDiagnosis: {
        possibleProblem: String,
        recommendedService: String,
        urgency: String,
        suggestedAction: String
      },

      location: {
        latitude: {
          type: Number,
          required: true
        },
        longitude: {
          type: Number,
          required: true
        }
      },

      status: {
        type: String,
        enum: [
          "pending",
          "accepted",
          "on_the_way",
          "arrived",
          "in_progress",
          "completed",
          "cancelled"
        ],
        default: "pending"
      },

      estimatedCost: {
        type: Number,
        min: 0
      }
    },
    {
      timestamps: true
    }
  );

export default mongoose.model<IAssistanceRequest>(
  "AssistanceRequest",
  assistanceRequestSchema
);