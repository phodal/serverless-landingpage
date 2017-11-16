'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports = (event, callback) => {
  const email = JSON.parse(event.body);

  email.id = uuid.v1();
  email.createdAt = new Date().getTime();
  email.updatedAt = new Date().getTime();

  const params = {
    TableName: 'email',
    Item: email
  };

  return dynamoDb.put(params, (error, result) => {
    if (error) {
      callback(error);
    }
    callback(error, params.Item);
  });
};
