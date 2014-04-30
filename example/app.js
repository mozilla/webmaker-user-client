var express = require('express');
var UserClient = require('../index');

var app = express();

var userClient = new UserClient({
  endpoint: 'http://testuser:password@localhost:3000'
});

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname + '/..'));

app.get('/user/:email', function(req, res) {
  userClient.update.byEmail(req.params.email, {
    isAdmin: true
  }, function (err, data) {
    if (err) {
      return res.send(500, err);
    }
    res.send(data);
  });
});

app.listen(1985, function() {
  console.log('App listening on 1985');
});
