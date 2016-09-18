'use strict';
var gateway = require('./gateway');
var parser = require('./parser');
var icalGen = require('./icalGen');

gateway.getMeetupEvents('awsfin').then(function (response) {
    //console.log(response);
    var events = parser.parseMeetupEvents(response);
    //console.log('events:' + events);
    var ical = icalGen.icalGenerator(events);

    console.log(ical.toString());
    ical.saveSync('./ical.ics')


  })
  .catch(function (err) {
    console.log(err);
  });
