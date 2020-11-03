import handler from "../libs/handler-lib";
import db from "../libs/mongodb-lib";
import Person from "../models/Person";
import { BadRequestError, NotFoundError } from "../libs/errors-lib";
export const main = handler(async (event, context) => {
  // Connect db
  db.connect();
  // Retrieve the data from the event
  const data = JSON.parse(event.body);

  // find the document
  const doc = await Person.findOne({
    _id: event.pathParameters.id,
    creatorId: data.creatorId,
  }).catch((e) => {
    throw new BadRequestError("Invalid Request");
  });
  // check the document
  if (!doc) throw new NotFoundError("Document Missing");
  // TODO
  // Check the creator Id against User Id
  // Check the return value
  // log the errors

  // update
  const update = await Person.update(
    { _id: event.pathParameters.id },
    { $set: data }
  ).catch((e) => {
    throw new BadRequestError("There has been a a problem");
  });

  // close the connection
  db.close();

  // return the data
  return doc;
});
