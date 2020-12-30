import handler from "../libs/handler-lib";
import db from "../libs/mongodb-lib";
import Info from "../models/Info";
import { BadRequestError } from "../libs/errors-lib";

export const main = handler(async (event, context) => {
  // Connect Db
  db.connect();

  // find the list of relevant
  const doc = await Info.find({ personId: event.pathParameters.id }).catch(
    (e) => {
      throw new BadRequestError("There has been a  problem");
    }
  );
  db.close();
  return doc;
});
