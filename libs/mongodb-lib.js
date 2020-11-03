import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;

const db = {
  connect: () => {
    mongoose
      .connect(uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })

      .catch((e) => {
        throw new Error("Mongo connection Error", e);
      });
  },
  close: () => {
    mongoose.connection.close();
  },
};
export default db;
