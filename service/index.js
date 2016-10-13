'use strict';

var gateway = require('./gateway');
var parser = require('./parser');
var icalGen = require('./icalGen');

function getIcalEvents() {
  gateway.getMeetupEvents('awsfin').then(function (response) {
      var events = parser.parseMeetupEvents(response);
      var ical = icalGen.icalGenerator(events);
      console.log(ical.toString());
      ical.saveSync('./ical.ics')
    })
    .catch(function (err) {
      console.log(err);
    });
}

module.exports = {
  getIcalEvents : getIcalEvents
};
