'use strict';

var rp = require('request-promise');

var getMeetupEvents = function(event) {
  var options = {
      uri: 'https://api.meetup.com/'+ event +'/events',
      json: true // Automatically parses the JSON string in the response
    };
    return rp(options);
};

module.exports = {
  getMeetupEvents : getMeetupEvents
};
