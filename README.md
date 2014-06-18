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
```

## User Object

```json
{
  "user": {
    "avatar": "https://secure.gravatar.com/avatar/30c0f54f30fc6a201e3f5ddaa5bc5974?s=26&d=https%3A%2F%2Fstuff.webmaker.org%2Favatars%2Fwebmaker-avatar-44x44.png",
    "emailHash": "30c0f54f30fc6a201e3f5ddaa5bc5974",
    "displayName": "k88hudson",
    "id": 21,
    "email": "k88hudson@gmail.com",
    "username": "k88hudson",
    "fullName": "k88hudson",
    "deletedAt": null,
    "lastLoggedIn": "2014-05-12T20:21:34.000Z",
    "isAdmin": true,
    "isCollaborator": true,
    "isSuspended": false,
    "sendNotifications": false,
    "sendEngagements": false,
    "sendEventCreationEmails": true,
    "wasMigrated": false,
    "createdAt": "2014-03-11T18:20:44.000Z",
    "updatedAt": "2014-05-12T20:21:34.000Z"
  }
}
```

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

#### By emails

```js
userClient.get.byEmails(['kate@kate.com','chris@chris.com'], function (err, users) { ... });
```

#### By usernames

```js
userClient.get.byUsernames(['k88hudson','cade'], function (err, users) { ... });
```

#### By ids

```js
userClient.get.byIds(['1023','1024'], function (err, users) { ... });
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
