'use strict';

const gateway = require('./gateway');
const parser = require('./parser');
const icalGen = require('./icalGen');
const s3saver = require('./s3saver');
const databaseManager = require('./databaseManager.js');

function getIcalEvents(eventId) {
  gateway.getMeetupEvents(eventId).then(function (response) {
      var events = parser.parseMeetupEvents(response);
      var ical = icalGen.icalGenerator(events);
      console.log(ical.toString());
      var localFileName = '/tmp/ical.ics';
      ical.saveSync(localFileName);
      s3saver.saveCalendarToS3(localFileName);

    })
    .catch(function (err) {
      console.log(err);
    });
}

function setGroupId(groupId) {
  databaseManager.saveGroupIdToDatabase(groupId).then(function (data) {
    console.log('Saving successful index');
  }).catch(function (err) {
    console.log('Error: ' + err);
  });
}

module.exports = {
  getIcalEvents: getIcalEvents,
  setGroupId: setGroupId
};
