import handler from "../libs/handler-lib";
import * as dynamoDb from "../libs/dynamodb-lib";
export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.personsTableName,
    Key: {
      personId: event.pathParameters.id,
    },
    UpdateExpression:
      "SET photo = :photo, foundAt = :foundAt, seen = :seen, located = :f, lifeStatus = :s",
    ExpressionAttributeValues: {
      ":photo": data.photo,
      ":foundAt": data.foundAt,
      ":seen": data.seen,
      ":f": data.found,
      ":s": data.status,
    },
    ReturnValues: "ALL_NEW",
  };

  const result = await dynamoDb.call("update", params);

  return result;
});
// Change the names in the data object from found and status # consider using mongodb
