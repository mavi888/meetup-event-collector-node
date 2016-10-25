'use strict';

var gateway = require('./gateway');
var parser = require('./parser');
var icalGen = require('./icalGen');
var s3saver = require('./s3saver');

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

module.exports = {
  getIcalEvents : getIcalEvents
};
