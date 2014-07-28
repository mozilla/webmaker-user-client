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
        return callback(new Error('No user was found'));
      }
      if (typeof user !== 'object') {
        try {
          user = JSON.parse(user);
        } catch (e) {
          return callback(new Error('User object could not be parsed: ' + user));
        }
      }
      callback(null, user);
    };
  };

  self.returnUsers = function (callback) {
    return function (err, resp, users) {
      if (err) {
        return callback(err);
      }
      if (!users) {
        return callback(new Error('No users were found'));
      }
      if (typeof users !== 'object') {
        try {
          users = JSON.parse(users);
        } catch (e) {
          return callback(new Error('Users object could not be parsed: ' + users));
        }
      }
      callback(null, users);
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
    },
    byIds: function getByIds(ids, callback) {
      request.post({
        uri: self.endpoint + '/user/ids',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ids: ids
        })
      }, self.returnUsers(callback));
    },
    byEmails: function getByEmails(emails, callback) {
      request.post({
        uri: self.endpoint + '/user/emails',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emails: emails
        })
      }, self.returnUsers(callback));
    },
    byUsernames: function getByUsernames(usernames, callback) {
      request.post({
        uri: self.endpoint + '/user/usernames',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usernames: usernames
        })
      }, self.returnUsers(callback));
    }
  };

  // UPDATE user methods
  self.update = {
    byEmail: function updateByEmail(email, user, callback) {
      request.patch(self.endpoint + '/api/user/email/' + email, {
        json: user
      }, self.returnUser(callback));
    },
    byId: function updateById(id, user, callback) {
      request.patch(self.endpoint + '/api/user/id/' + id, {
        json: user
      }, self.returnUser(callback));
    },
    byUsername: function updateByUsername(username, user, callback) {
      request.patch(self.endpoint + '/api/user/username/' + username, {
        json: user
      }, self.returnUser(callback));
    },
  };

};
