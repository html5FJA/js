var Cheerio = require('cheerio')
var Request = require('request')

var domain = 'http://www.fifa.com/worldcup/matches/index.html'
exports.results = function results(reply) {
	Request(domain, function (err, response, html) {
		if (err) return console.error(err)
		var $ = Cheerio.load(html)
		var date, group, stadium, city, home, away, score;
		var matchResults;
		var data = [];

		$('div.mu.result').each(function(i, element) {
			var a = $(this);
			a = a.children().children();
			if (a.attr('class') === "mu-i" && a.parent().parent().parent().parent().attr('class') === "match-list-date anchor") {
				date = $("div.mu-i-date", a).text(); 
				group = $("div.mu-i-group", a).text();
				stadium = $("div.mu-i-stadium", a).text();
				city = $("div.mu-i-venue", a).text();
				home = $("span.t-nText", a).eq(0).text();
				away = $("span.t-nText", a).eq(1).text();
				score = $("span.s-scoreText", a).text();
				hFlag = $("img.flag", a).eq(0).attr('src');
				aFlag = $("img.flag", a).eq(1).attr('src');

				matchResults = {
					date: date,
					group: group,
					stadium: stadium,
					city: city,
					home: home,
					hFlag: hFlag,
					away: away,
					aFlag: aFlag,
					score: score
				};
				data = data.concat(matchResults);
			}
		})
		reply.send(data);
	});
}

exports.schedule = function schedule(reply) {
	Request(domain, function (err, response, html) {
		if (err) return console.error(err)
		var $ = Cheerio.load(html)
		var date, group, stadium, city, home, away, score, hFlag, aFlag;
		var matchSchedule;
		var data = []

		$('div.mu.fixture').each(function(i, element) {
			var a = $(this);
			a = a.children().children();
			if (a.attr('class') === "mu-i" && a.parent().parent().parent().parent().attr('class') === "match-list-date anchor") {
				date = $("div.mu-i-date", a).text(); 
				group = $("div.mu-i-group", a).text();
				stadium = $("div.mu-i-stadium", a).text();
				city = $("div.mu-i-venue", a).text();
				home = $("span.t-nText", a).eq(0).text();
				away = $("span.t-nText", a).eq(1).text();
				time = $("span.s-scoreText", a).text();
				hFlag = $("img.flag", a).eq(0).attr('src');
				aFlag = $("img.flag", a).eq(1).attr('src');

				matchSchedule = {
					date: date,
					group: group,
					stadium: stadium,
					city: city,
					home: home,
					hFlag: hFlag,
					away: away,
					aFlag: aFlag,
					time: time
				};
				data = data.concat(matchSchedule);
			}
		})
		reply.send(data);
	});
}

exports.live = function live(reply) {
	Request(domain, function (err, response, html) {
		if (err) return console.error(err)
	var $ = Cheerio.load(html)
		var date, group, stadium, city, home, away, score, hFlag, aFlag;
		var liveMatch;
		var data = [];

		$('div.mu.live').each(function(i, element) {
			var a = $(this);
			a = a.children().children();
			if (a.attr('class') === "mu-i" && a.parent().parent().parent().parent().attr('class') === "match-list-date anchor") {
				date = $("div.mu-i-date", a).text(); 
				group = $("div.mu-i-group", a).text();
				stadium = $("div.mu-i-stadium", a).text();
				city = $("div.mu-i-venue", a).text();
				home = $("span.t-nText", a).eq(0).text();
				away = $("span.t-nText", a).eq(1).text();
				score = $("span.s-scoreText", a).text();
				hFlag = $("img.flag", a).eq(0).attr('src');
				aFlag = $("img.flag", a).eq(1).attr('src');

				liveMatch = {
					date: date,
					group: group,
					stadium: stadium,
					city: city,
					home: home,
					hFlag: hFlag,
					away: away,
					aFlag: aFlag,
					score: score
				};
				data = data.concat(liveMatch);	
			}
		})
		reply.send(data);
	});
}

exports.byID = function resultsByID(reply, team) {
	Request(domain, function (err, response, html) {
		if (err) return console.error(err)
		var $ = Cheerio.load(html)	
		var date, group, stadium, city, home, away, score, hFlag, aFlag;
		var matchResults;
		var data = [];

		$('div.mu.result').each(function(i, element) {
			var a = $(this);
			a = a.children().children();
			hID = $("span.t-nTri", a).eq(0).text();
			aID = $("span.t-nTri", a).eq().text();
			if (hID === team || aID === team) {
				date = $("div.mu-i-date", a).text(); 
				group = $("div.mu-i-group", a).text();
				stadium = $("div.mu-i-stadium", a).text();
				city = $("div.mu-i-venue", a).text();
				home = $("span.t-nText", a).eq(0).text();
				away = $("span.t-nText", a).eq(1).text();
				score = $("span.s-scoreText", a).text();
				hFlag = $("img.flag", a).eq(0).attr('src');
				aFlag = $("img.flag", a).eq(1).attr('src');

				matchResults = {
					date: date,
					group: group,
					stadium: stadium,
					city: city,
					home: home,
					hFlag: hFlag,
					away: away,
					aFlag: aFlag,
					score: score
				};
				data = data.concat(matchResults);
			}
		})
	reply.send(data);
	});
}















