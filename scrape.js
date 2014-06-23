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
				date = a.children().eq(1).text();
				group = a.children().eq(3).text();
				stadium = a.children('[class=mu-i-location]').children().first().text();
				city = a.children('[class=mu-i-location]').children().last().text();
				home = a.next().next().children().first().children().last().children().first().text();
				away = a.next().next().children().first().next().children().last().children().first().text();
				score = a.next().next().children().first().next().next().children().children().last().text();
				hFlag = a.next().next().children().first().children().first().children().children().attr('src');
				aFlag = a.next().next().children().first().next().children().first().children().children().attr('src');

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
		reply(data);
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
				date = a.children().eq(1).text();
				group = a.children().eq(3).text();
				stadium = a.children('[class=mu-i-location]').children().first().text();
				city = a.children('[class=mu-i-location]').children().last().text();
				home = a.next().next().children().first().children().last().children().first().text();
				away = a.next().next().children().first().next().children().last().children().first().text();
				time = a.next().next().children().first().next().next().children().children().last().text();
				hFlag = a.next().next().children().first().children().children().children().attr('src');
				aFlag = a.next().next().children().first().next().children().children().children().attr('src');

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
		reply(data);
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
				date = a.children().eq(1).text();
				group = a.children().eq(3).text();
				stadium = a.children('[class=mu-i-location]').children().first().text();
				city = a.children('[class=mu-i-location]').children().last().text();
				home = a.next().next().children().first().children().last().children().first().text();
				away = a.next().next().children().first().next().children().last().children().first().text();
				score = a.next().next().children().first().next().next().children().children().last().text();
				hFlag = a.next().next().children().first().children().children().children().attr('src');
				aFlag = a.next().next().children().first().next().children().children().children().attr('src');

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
		reply(data);
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
			hID = a.next().next().children().first().children().last().children().last().text();
			aID = a.next().next().children().first().next().children().last().children().last().text();
			if (hID === team || aID === team) {
				date = a.children().eq(1).text();
				group = a.children().eq(3).text();
				stadium = a.children('[class=mu-i-location]').children().first().text();
				city = a.children('[class=mu-i-location]').children().last().text();
				home = a.next().next().children().first().children().last().children().first().text();
				away = a.next().next().children().first().next().children().last().children().first().text();
				score = a.next().next().children().first().next().next().children().children().last().text();
				hFlag = a.next().next().children().first().children().children().children().attr('src');
				aFlag = a.next().next().children().first().next().children().children().children().attr('src');

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
	reply(data);
	});
}















