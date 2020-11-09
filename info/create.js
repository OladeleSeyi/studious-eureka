import handler from "../libs/handler-lib";
import db from "../libs/mongodb-lib";
import Info from "../models/Info";
import { BadRequestError } from "../libs/errors-lib";

export const main = handler(async (event, context) => {
  // Connect db
  db.connect();
  //  retrieve the data from the event
  const data = JSON.parse(event.body);

  // Validate the data

  // Save the data
  const doc = new Info({ ...data });

  const saved = await doc.save().catch((e) => {
    throw new BadRequestError("Invalid Data: Please Retry this action");
  });

  // Close the db connection
  db.close();

  // Notify the associated stake holders
  // send emails and push the notifications to associated
  // return the results
  return saved;
});
