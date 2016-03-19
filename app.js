var Client = require('node-xmpp-client');
var auth = require('./auth.json');

console.log(auth);

var client = new Client(auth);

client.on('online', function() {
	console.log("We're online!");
});

client.on('stanza', function(stan) {
	console.dir(stan);
});

client.on('error', function(e) {
	console.error(e.stack);
	process.exit(0);
})