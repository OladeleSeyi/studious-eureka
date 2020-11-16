import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
  userId: String,
  name: String,
  email: String,
  phoneNumber: String,
  gender: String,
  profilePicture: String,
});

const User = mongoose.model("user", userSchema);

export default User;
