'use strict';

var cheerio = require('cheerio');

var Promise = require('pinkie-promise');

var got = require('got');

module.exports = function (module) {
	if (typeof module !== 'string') {
		return Promise.reject(new Error('module required'));
	}

	var url = 'https://www.npmjs.com/package/' + module;

	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);

		return {
			lastDay: $('.daily-downloads').text() + ' downloads' || null,

			lastWeek: $('.weekly-downloads').text() + ' downloads' || null,

			lastMonth: $('.monthly-downloads').text() + ' downloads' || null
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Sorry! The requested package is not available on NPM';
		}

		throw err;
	});
};

