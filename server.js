var Hapi = require("hapi");
var Data = require("./scrape");

var serverOptions = {
	cors: true
}
var server = new Hapi.Server(8080, serverOptions);

var routeArray = [
	{ method: 'GET', path: '/worldcup/v1/results', handler: results },
	{ method: 'GET', path: '/worldcup/v1/schedule', handler: schedule },
	{ method: 'GET', path: '/worldcup/v1/live', handler: live },
	{ method: 'GET', path: '/worldcup/v1/results/{id}', handler: resultsByID }
];

server.route(routeArray);

function results (request, reply) {
	Data.results(reply);
}

function schedule (request, reply) {
	Data.schedule(reply);
}

function live (request, reply) {
	Data.live(reply);
}

function resultsByID (request, reply) {
	Data.byID(reply, request.params.id);
}

server.start();

//WHILE LOOP, until a.class === mu-i