'use strict';

var meetupService = require('./service/index');

var calendarEventId = 'awsfin';
meetupService.getIcalEvents(calendarEventId);
