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

userSchema.virtual("persons", {
  ref: "Person", //The Model to use
  localField: "_id", //Find in Model, where localField
  foreignField: "creatorId", // is equal to foreignField
});

userSchema.virtual("infoList", {
  ref: "Info",
  localField: "_id",
  foreignField: "creatorId",
});

// Set Object and Json property to true. Default is set to false
userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

const User = mongoose.model("User", userSchema);

export default User;
