"use strict";

const AWS = require("aws-sdk");

const kaamDelete = async (event) => {
  try {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const { id } = event.pathParameters;

    await dynamoDb.delete({
      TableName: "KaamKaro",
      Key: {
        id
      }
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: "Kaam delete ho gaya"
      })
    };

  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: "Kaam delete nahi hua",
        error: err.message
      })
    };
  }
};

module.exports = {
  handler: kaamDelete
};
