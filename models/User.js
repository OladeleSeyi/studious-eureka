import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  cognitoId: {
    type: String,
    required: true,
  },
  name: String,
  email: String,
  phoneNumber: String,
  gender: String,
  profilePicture: String,
});

const User = mongoose.model("user", userSchema);

export default User;
