'use strict';

const meetupService = require('./service/index');
const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

const calendarEventId = 'awsfin';
//meetupService.getIcalEvents(calendarEventId);

meetupService.setGroupId(calendarEventId);
