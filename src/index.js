var uniqueRandomArray = require('unique-random-array');
var nietzscheTolk = require('./nietzsche-citation');
var getRandomItem = uniqueRandomArray(nietzscheTolk);

module.exports = {
	all: nietzscheTolk,
	random: random
};

function random(number) {
	var randomItems = [],
		i=0;
	if(number === undefined) {
		return getRandomItem();
	} else {
		
		for (; i < number; i++) {
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
}
