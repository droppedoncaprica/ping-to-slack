var Client = require('node-xmpp-client');
var auth = require('./auth.json');

var client = new Client(auth);

client.on('online', function() {
	console.log("We're online!");
});

client.on('stanza', function(stan) {
	console.log(JSON.stringify(stan, null, '  '));
});

client.on('error', function(e) {
	console.error(e);
	process.exit(0);
});

client.on('disconnect', function() {
	console.log("Disconnected...");
});

client.on('reconnect', function () {
  console.log('Reconnecting...');
});
