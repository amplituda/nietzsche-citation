var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./nietzsche-citation');

module.exports = {
	all: starWarsNames,
	random: uniqueRandomArray(starWarsNames)
};