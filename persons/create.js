import handler from "../libs/handler-lib";
import db from "../libs/mongodb-lib";
import Person from "../models/Person";
import { BadRequestError } from "../libs/errors-lib";
import validate from "./validation";
export const main = handler(async (event, context) => {
  // Connect db]
  db.connect();
  // Retrieve the data from the event
  const data = JSON.parse(event.body);

  // validate the data (purposely vague)
  await validate.create(data);

  save the data and return the saved data
  const doc = new Person({ ...data });
  const saved = await doc.save().catch((e) => {
    throw new BadRequestError("Invalid Data ");
  });
  // return the data
  db.close();
  return saved;
});
