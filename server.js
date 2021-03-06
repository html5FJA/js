var Hapi = require("hapi");
var Data = require("./scrape");

var serverOptions = {
	cors: true
}
var port = Number(process.env.PORT || 5000);
var server = new Hapi.Server('0.0.0.0', port, serverOptions);

var routeArray = [
	{ method: 'GET', path: '/worldcup/v1/results', handler: results },
	{ method: 'GET', path: '/worldcup/v1/schedule', handler: schedule },
	{ method: 'GET', path: '/worldcup/v1/live', handler: live },
	{ method: 'GET', path: '/worldcup/v1/results/{id}', handler: resultsByID },
	{ method: 'GET', path: '/', handler: defaultHandler }
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

function defaultHandler (request,reply) {
	reply("Success");
}

server.start();