import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email should  be unique"],
      required: [true, "Email should not be null"],
      min: [5, "Email must be greater than 5"],
      max: [25, "Email must be less than 25"],
    },
    name: {
      type: String,
      required: [true, "name should not be null"],
      min: [3, "Name must be greater than 2"],
      max: [15, "Name must be less than 15"],
    },
    gender: {
      type: String,
      enum: {
        values: ["Male", "Female", "Other"],
        message: "We accept on Male, Female & Other Value",
      },
    },
  },
  { timestamps: true }
);

const userModel = model("user", userSchema);
export default userModel;
