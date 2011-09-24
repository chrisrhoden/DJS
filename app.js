var express = require('express');
var dj = require('djs');


server = express.createServer();

dj.initialize(server);



server.set('view options', {
	layout: false
});

server.set('view engine', 'ejs');

// Configuration
server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
server.set('views', __dirname + '/views');
server.use(express.static(__dirname + '/static'));



server.get('/', function(req, res){
  res.render("index");
});

server.listen(80);
console.log("Express server listening on port %d", server.address().port);