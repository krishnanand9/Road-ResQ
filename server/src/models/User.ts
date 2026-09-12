import mongoose, { Document, Schema } from "mongoose";

export type UserRole = "user" | "mechanic" | "admin";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: UserRole;
  location?: {
    latitude: number;
    longitude: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    },

    phone: {
      type: String,
      required: true,
      trim: true
    },

    role: {
      type: String,
      enum: ["user", "mechanic", "admin"],
      default: "user"
    },

    location: {
      latitude: Number,
      longitude: Number
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IUser>("User", userSchema);