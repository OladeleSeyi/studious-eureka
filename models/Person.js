import mongoose from "mongoose";
const Schema = mongoose.Schema;
const personSchema = new Schema({
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
    enum: ["Missing", "Arrested", "Dead", "Found"],
    default: "Missing",
  },
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
});

personSchema.virtual("infoList", {
  ref: "Info",
  localField: "_id",
  foreignField: "personId",
});
personSchema.set("toObject", { virtuals: true });
personSchema.set("toJSON", { virtuals: true });

const Person = mongoose.model("Person", personSchema);

export default Person;
