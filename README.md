# Webmaker User Client

Use this if you need to get, update, or delete information about a specific Webmaker user.

You will need basic auth credentials for and a [Webmaker Login](https://github.com/mozilla/login.webmaker.org) endpoint to use it.

## Install

`npm install webmaker-user-client`


## Setup

```js
var UserClient = require('webmaker-user-client');

var userClient = new UserClient({
  endpoint: 'http://testuser:password@localhost:3000'
});

## User Object

## Methods

### Get

#### By email

```js
userClient.get.byEmail('kate@kate.com', function (err, user) { ... });
```

#### By username

```js
userClient.get.byUsername('k88hudson', function (err, user) { ... });
```

#### By id

```js
userClient.get.byId('1023', function (err, user) { ... });
```

### Update

#### By email

```js
userClient.update.byEmail('kate@kate.com', {
  isCollaborator: true
}, function(err, user) {
  console.log(user);
});
```

## Todo

```js
userClient.update.byUsername
userClient.delete.byEmail
userClient.delete.byUsername

```
