var JS  = require('jstest');
var WebmakerUserClient = require('../index');

JS.Test.describe('WebmakerUserClient', function() { with(this) {
  before(function() { with(this) {
    this.userClient = new WebmakerUserClient({
      endpoint: "http://testuser:password@localhost:3000"
    });
  }});

  // Callback-style
  it("has a get.byId function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byId);
  }});

  it("has a get.byEmail function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byEmail);
  }});

  it("has a get.byUsername function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byUsername);
  }});

  it("has a get.byIds function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byIds);
  }});

  it("has a get.byEmails function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byEmails);
  }});

  it("has a get.byUsernames function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byUsernames);
  }});

  it("has a update.byEmail function", function() { with(this) {
    assertKindOf('function', this.userClient.update.byEmail);
  }});

  it("has a update.byId function", function() { with(this) {
    assertKindOf('function', this.userClient.update.byId);
  }});

  it("has a update.byUsername function", function() { with(this) {
    assertKindOf('function', this.userClient.update.byUsername);
  }});

  // Promise-style
  it("has a get.byIdAsync function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byIdAsync);
  }});

  it("has a get.byEmailAsync function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byEmailAsync);
  }});

  it("has a get.byUsernameAsync function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byUsernameAsync);
  }});

  it("has a get.byIdsAsync function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byIdsAsync);
  }});

  it("has a get.byEmailsAsync function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byEmailsAsync);
  }});

  it("has a get.byUsernamesAsync function", function() { with(this) {
    assertKindOf('function', this.userClient.get.byUsernamesAsync);
  }});

  it("has a update.byEmailAsync function", function() { with(this) {
    assertKindOf('function', this.userClient.update.byEmailAsync);
  }});

  it("has a update.byIdAsync function", function() { with(this) {
    assertKindOf('function', this.userClient.update.byIdAsync);
  }});

  it("has a update.byUsernameAsync function", function() { with(this) {
    assertKindOf('function', this.userClient.update.byUsernameAsync);
  }});
}});
