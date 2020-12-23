import handler from "../libs/handler-lib";
import db from "../libs/mongodb-lib";
import User from "../models/User";
import { BadRequestError } from "../libs/errors-lib";

export const main = handler(async (event, context) => {
  // Connect db
  db.connect();
  // const now = new Date().toISOString();
  // check to ensure the request is authenticated
  if (
    data.userId === "" ||
    !event.requestContext.identity.cognitoAuthenticationProvider.includes(
      data.userId
    )
  ) {
    throw new BadRequestError(" Sign In first Motherfucker");
  }

  // Retrieve the data from the event
  const data = JSON.parse(event.body);
  // validate the user object

  // Attempt to save the user
  const doc = new User({ ...data });
  const saved = await doc.save().catch((e) => {
    throw new BadRequestError("Invalid Data");
  });

  saved;

  // close the connection
  db.close();
  // return the data
  return doc;
});
