import handler from "../libs/handler-lib";
import * as dynamoDb from "../libs/dynamodb-lib";
export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.personsTableName,
    // ProjectionExpression: "complexion, personName",
  };

  try {
    const results = dynamoDb.call("scan", params);
    console.log({ results });
    return results;
  } catch (e) {
    throw e;
  }
});
