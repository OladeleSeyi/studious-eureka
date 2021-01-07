import mongoose from "mongoose";
const Schema = mongoose.Schema;
const infoSchema = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    validate: {
      validator(creatorId) {
        return mongoose.Types.ObjectId.isValid(creatorId);
      },
    },
  },
  personId: {
    type: Schema.Types.ObjectId,
    ref: "Person",
    required: true,
    validate: {
      validator(personId) {
        return mongoose.Types.ObjectId.isValid(personId);
      },
    },
  },
  seen: { type: Boolean, default: false, required: true },
  status: String,
  date: { type: Date, required: true },
  location: String,
  photos: Array,
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const Info = mongoose.model("Info", infoSchema);

export default Info;
