import mongoose, { Document, Schema } from "mongoose";

export interface IVehicle extends Document {
  owner: mongoose.Types.ObjectId;
  vehicleNumber: string;
  brand: string;
  vehicleModel: string;
  fuelType: string;
  year: number;
}

const vehicleSchema = new Schema<IVehicle>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    vehicleNumber: {
      type: String,
      required: true,
      uppercase: true,
      trim: true
    },

    brand: {
      type: String,
      required: true,
      trim: true
    },

    vehicleModel: {
      type: String,
      required: true,
      trim: true
    },

    fuelType: {
      type: String,
      enum: [
        "Petrol",
        "Diesel",
        "Electric",
        "CNG",
        "Hybrid"
      ],
      required: true
    },

    year: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IVehicle>(
  "Vehicle",
  vehicleSchema
);