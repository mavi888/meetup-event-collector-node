'use strict';

const AWS = require('aws-sdk-promise');
const dynamodb = new AWS.DynamoDB.DocumentClient();

function saveGroupIdToDatabase(groupId) {
  console.log("GroupId: " + groupId);
  var params = {
    'TableName': "groups-table-3",
    'Item': {
      groupid: groupId
    }
  };
  return dynamodb.put(params).promise();
}

module.exports = {
  saveGroupIdToDatabase : saveGroupIdToDatabase
};
