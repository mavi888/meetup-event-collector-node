'use strict';

var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs = require('fs');

function saveCalendarToS3(localFileName) {
  var s3 = new AWS.S3();
  console.log("Start uploading file to S3");

  fs.readFile(localFileName, function (err, data) {
    if (err) throw err;
    var param = {Bucket: 'meetup-event-collector-bucket', Key: 'ical-generated.ical', Body: data};

    s3.upload(param, function(err, data) {

        // Whether there is an error or not, delete the temp file
        fs.unlink(localFileName, function (err) {
          if (err) console.error(err);
          console.log('Temp File Delete');
        });

        if (err) console.log(err, err.stack);
        else console.log('Successfully uploaded data');
    });
  });
}

module.exports = {
  saveCalendarToS3 : saveCalendarToS3
};
