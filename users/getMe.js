import handler from "../libs/handler-lib";
import db from "../libs/mongodb-lib";
import User from "../models/User";
import { BadRequestError } from "../libs/errors-lib";

export const main = handler(async (event, context) => {
  // Connect db
  db.connect();
  // const now = new Date().toISOString();
  // check to ensure the request is authenticated
  console.log(event.requestContext.identity.cognitoIdentityPoolId);
  if (
    !event.requestContext.identity.cognitoIdentityPoolId ===
      process.env.IDENTITY_POOL_ID &&
    !event.requestContext.identity.cognitoAuthenticationProvider.includes(
      process.env.USER_POOL_ID
    )
  ) {
    throw new BadRequestError(" Sign In first Motherfucker");
  }
  // attempt to retrieve user info

  const me = await User.find({
    cognitoId: event.requestContext.identity.cognitoIdentityPoolId,
  }).catch((e) => {
    throw new BadRequestError({ error: "There was an error " });
  });

  // close the connection
  db.close();
  // return the data
  return me;
});
