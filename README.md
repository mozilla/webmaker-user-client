# Webmaker User Client

## Install

`npm install webmaker-user-client`


## Usage

```js
var UserClient = require('webmaker-user-client');

var userClient = new UserClient({
  endpoint: 'http://testuser:password@localhost:3000'
});

userClient.update.byEmail('kate@kate.com', {
  isCollaborator: true
}, function(err, user) {
  console.log(user);
});
```

## Todo

```js
userClient.get.byEmail
userClient.get.byUsername
userClient.update.byUsername
userClient.delete.byEmail
userClient.delete.byUsername

```
