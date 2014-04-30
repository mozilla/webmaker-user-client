var request = require('request');

module.exports = function (options) {

  options = options || {};

  var self = this;

  // Missing endpoint
  if (!options.endpoint) {
    throw new Error('(webmaker-user-client): No endpoint was passed in!');
  }

  self.endpoint = options.endpoint;

  self.update = {
    byEmail: function updateByEmail(email, user, callback) {
      request.put(self.endpoint + '/api/user/email/' + email, {
        json: user
      }, function (err, resp, user) {
        if (err) {
          return callback(err);
        }
        if (!user) {
          return callback({
            error: 'No user was found'
          });
        }
        callback(null, user);
      });

    }
  };

};
