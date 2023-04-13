import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  Username: {
    type: "String",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  confirmPassword: {
    type: "string",
    required: true,
  },
});

export default mongoose.model("register", UserSchema);
