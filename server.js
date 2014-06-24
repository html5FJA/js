var express = require('express');
var Data = require('./scrape');
 
var app = express();

var port = Number(process.env.PORT || 5000);
 
app.get('/worldcup/v1/results', function results(request, reply) {
	Data.results(reply);
});
app.get('/worldcup/v1/results/{id}', function resultsByID (request, reply) {
	Data.byID(reply, request.params.id);
});
app.get('/worldcup/v1/schedule', function schedule(request, reply) {
	Data.schedule(reply);
});
app.get('/worldcup/v1/live', function live(request, reply) {
	Data.live(reply);
});
app.get('/', function defaultHandler(request, reply) {
	reply.send("Success");
});

console.log(port);
app.listen(port);