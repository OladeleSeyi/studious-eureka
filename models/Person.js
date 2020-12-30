import mongoose from "mongoose";
const Schema = mongoose.Schema;
const personSchema = new Schema({
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    validate: {
      validator(creatorId) {
        return mongoose.Types.ObjectId.isValid(creatorId);
      },
    },
  },
  personName: {
    type: String,
    required: true,
  },
  lastSeenLocation: {
    type: String,
    required: true,
  },
  lastSeenDate: {
    type: String,
    required: true,
  },
  dob: Date,
  sex: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Missing",
  },
  seen: { type: Boolean, default: false },
  found: { type: Boolean, default: false },
  foundAt: String,
  comments: String,
  photo: String,
  photos: Array,
  height: String,
  complexion: String,
  hair: String,
  bloodGroup: String,
  occupation: String,
  nationality: String,
  stateOfOrigin: String,
  lga: String,
  phoneNumber: String,
  createdAt: { type: Date, default: Date.now() },
  // info: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Info",
  //   },
  // ],
});

const Person = mongoose.model("person", personSchema);

export default Person;
