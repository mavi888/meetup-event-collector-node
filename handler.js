'use strict';

var meetupService = require('./service/index');

module.exports.getMeetupEventsCalendar = function(event, context, callback) {
  meetupService.getIcalEvents();
  callback(null, "Calendar Created!");
}
