import { nanoid } from "nanoid";
import handler from "../libs/handler-lib";
import * as dynamoDb from "../libs/dynamodb-lib";
export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.personsTableName,
    Item: {
      personId: nanoid(),
      creatorId: "786if-srytdwr", //placeholder for cognito
      createdAt: Date.now(),
      ...data,
    },
  };
  try {
    // validate

    // add to database
    await dynamoDb.call("put", params);

    // respond
    return params.Item;
  } catch (e) {
    throw e;
  }
});
