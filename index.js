var request = require('request');

module.exports = function (options) {

  options = options || {};

  var self = this;

  // Missing endpoint
  if (!options.endpoint) {
    throw new Error('(webmaker-user-client): No endpoint was passed in!');
  }

  self.endpoint = options.endpoint;

  // Helper for handling errors, sending responses to callbacks
  // Used in most methods that return user data
  self.returnUser = function (callback) {
    return function (err, resp, user) {
      if (err) {
        return callback(err);
      }
      if (!user) {
        return callback({
          error: 'No user was found'
        });
      }
      if (typeof user !== 'object') {
        try {
          user = JSON.parse(user);
        } catch (e) {
          return callback({
            error: 'User object could not be parsed',
            user: user
          });
        }
      }
      callback(null, user);
    };
  };

  // **********************
  // MAIN API

  // GET user methods
  self.get = {
    byId: function getById(id, callback) {
      request.get(self.endpoint + '/user/id/' + id, self.returnUser(callback));
    },
    byEmail: function getByEmail(email, callback) {
      request.get(self.endpoint + '/user/email/' + email, self.returnUser(callback));
    },
    byUsername: function getByEmail(username, callback) {
      request.get(self.endpoint + '/user/username/' + username, self.returnUser(callback));
    }
  };

  // UPDATE user methods
  self.update = {
    byEmail: function updateByEmail(email, user, callback) {
      request.put(self.endpoint + '/api/user/email/' + email, {
        json: user
      }, self.returnUser(callback));
    }
  };

};
