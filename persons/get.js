import handler from "../libs/handler-lib";
import * as dynamoDb from "../libs/dynamodb-lib";
export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.personsTableName,
    Key: {
      personId: event.pathParameters.id,
    },
  };

  // get from database
  const result = await dynamoDb.call("get", params);

  // check and return output
  if (!result.Item) {
    throw new Error("Item not found.");
  }
  return result;
});
