import handler from "../libs/handler-lib";
import db from "../libs/mongodb-lib";
import Person from "../models/Person";
export const main = handler(async (event, context) => {
  // Connect db]
  db.connect();
  const persons = await Person.find().exec();

  db.close();
  return persons;
});
