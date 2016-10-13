'use strict';

var ical = require('ical-generator');

var icalGenerator = function(events) {
  var cal = ical();

  events.map(function(event) {
    cal.createEvent({
        start: new Date(event.time),
        summary: event.name,
        location: event.venueAddress,
        description: event.name + ' -- ' +
                    event.description + ' -- ' +
                    'Register at: ' + event.link + ' -- ' +
                    'Location: ' + event.venueName + ' ' + event.venueAddress + ' -- ' +
                    'Organized by: ' + event.groupName,
        url: event.link
      });
  });

  return cal;
};

module.exports = {
  icalGenerator : icalGenerator
};
