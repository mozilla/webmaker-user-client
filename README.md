# Webmaker User Client

Use this if you need to get, update, or delete information about a specific Webmaker user.

You will need basic auth credentials for and a [Webmaker Login](https://github.com/mozilla/login.webmaker.org) endpoint to use it.

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
