'use strict';

var gateway = require('../gateway');

describe('getMeetupEvents', function() {
  it('should get events response for event', function() {
    gateway.getMeetupEvents('awsfin').then(function (response) {
        expect(response).to.be.null;
        expect(response).to.not.be.undefined;
      });
  });
});
