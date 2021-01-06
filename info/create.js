import handler from "../libs/handler-lib";
import db from "../libs/mongodb-lib";
import Info from "../models/Info";
import { BadRequestError } from "../libs/errors-lib";
import validate from "./validation";
import sendMail from "./email";

export const main = handler(async (event, context) => {
  // Connect db
  db.connect();
  //  retrieve the data from the event
  const data = JSON.parse(event.body);

  // Validate the data (purposely vague)
  await validate.create(data);

  // Save the data
  const doc = new Info({ ...data });

  const saved = await doc.save().catch((e) => {
    throw new BadRequestError("Invalid Data: Please Retry this action");
  });

  // Close the db connection
  db.close();

  // Notify the associated stake holders
  // send emails and push the notifications to associated
  sendMail(
    process.env.TMAIL,
    {
      person: data.person,
      name: data.name,
      comment: data.comment,
      location: data.location,
      pronoun: data.pronoun,
    },
    data.found
  );
  // return the results
  return saved;
});
