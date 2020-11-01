import handler from "../libs/handler-lib";
import * as dynamoDb from "../libs/dynamodb-lib";
export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.personsTableName,
  };

  const results = await dynamoDb.call("scan", params);
  return results.Items;
});
