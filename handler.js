'use strict';

var meetupService = require('./service/index');

module.exports.getMeetupEventsCalendar = function(event, context, callback) {
  var calendarEventId = event.path.id;
  meetupService.getIcalEvents(calendarEventId);
  callback(null, "Calendar Created for " + calendarEventId + "!");
}
