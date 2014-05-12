var express = require('express');
var UserClient = require('../index');

var app = express();

var userClient = new UserClient({
  endpoint: 'http://testuser:password@localhost:3000'
});

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname + '/..'));

function handleUser(res) {
  return function (err, user) {
    if (err) {
      return res.send(500, err);
    }
    res.json(user);
  };
};

app.get('/get/id/:id', function(req, res) {
  userClient.get.byId(req.params.id, handleUser(res));
});

app.get('/get/email/:email', function(req, res) {
  userClient.get.byEmail(req.params.email, handleUser(res));
});

app.get('/get/username/:username', function(req, res) {
  userClient.get.byUsername(req.params.username, handleUser(res));
});

app.get('/update/email/:email', function(req, res) {
  userClient.update.byEmail(req.params.email, {
    isAdmin: true
  }, handleUser(res));
});

app.listen(1985, function() {
  console.log('App listening on 1985');
});
