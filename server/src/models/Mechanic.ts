import mongoose, { Document, Schema } from "mongoose";

export interface IMechanic extends Document {
  user: mongoose.Types.ObjectId;
  shopName: string;
  services: string[];
  experience: number;
  location: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  isAvailable: boolean;
  verificationStatus: "pending" | "verified" | "rejected";
}

const mechanicSchema = new Schema<IMechanic>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },

    shopName: {
      type: String,
      required: true,
      trim: true
    },

    services: {
      type: [String],
      required: true
    },

    experience: {
      type: Number,
      required: true,
      min: 0
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

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },

    isAvailable: {
      type: Boolean,
      default: true
    },

    verificationStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IMechanic>("Mechanic", mechanicSchema);