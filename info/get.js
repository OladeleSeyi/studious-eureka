import handler from "../libs/handler-lib";
import db from "../libs/mongodb-lib";
import Info from "../models/Info";
import { BadRequestError, NotFoundError } from "../libs/errors-lib";

export const main = handler(async (event, context) => {
  // Connect db
  db.connect();
  // find the relevant doc
  const doc = await Info.findById({ _id: event.pathParameters.id }).catch(
    (e) => {
      throw new BadRequestError("There has been a  problem");
    }
  );
  // Check the doc to be sure there was a doc
  if (!doc) {
    throw new NotFoundError("Record not found ");
  }
  // Close the db connection
  db.close();
  // return the results
  return doc;
});
