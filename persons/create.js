// import * as uuid from "uuid";
import handler from "../libs/handler-lib";
import { nanoid } from "nanoid";
import * as dynamoDb from "../libs/dynamodb-lib";
export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.personsTableName,
    Item: {
      personId: nanoid(),
      creatorId: " The user' Id ", //placeholder for cognito
      createdAt: Date.now(),
      ...data,
    },
  };
  try {
    await dynamoDb.call("put", params);
    return params.Item;
  } catch (e) {
    throw e;
  }
});
