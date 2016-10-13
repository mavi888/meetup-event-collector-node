'use strict';

var parseMeetupEvents = function(jsonEvents) {
  var resultEvents = [];
  jsonEvents.map(function(jsonEvent) {
    var event = {};
    event.id =  jsonEvent.id;
    event.status = jsonEvent.status;
    event.name = jsonEvent.name;
    event.time = jsonEvent.time;
    event.link = jsonEvent.link;
    event.description = jsonEvent.description;
    event.venueName = jsonEvent.venue.name;
    event.venueAddress = jsonEvent.venue.address_1 + ', ' + jsonEvent.venue.city + ', ' + jsonEvent.venue.localized_country_name;
    event.groupName = jsonEvent.group.name;

    resultEvents.push(event);
  });

  return resultEvents;
};

module.exports = {
  parseMeetupEvents : parseMeetupEvents
};
