var expect = require('chai').expect;
var nietzscheTolk = require('./index');


describe('nietzsche-citation', function() {
    describe('all', function() {
        it('should be an array of strings', function() {
            expect(nietzscheTolk.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain `Jedes Wort ist ein Vorurteil.`', function() {
        	expect(nietzscheTolk.all).to.include('Jedes Wort ist ein Vorurteil.');
        });
    });

    describe('random', function() {
    	it('should return a random item from the nietzscheTolk.all', function() {
    		var randomItem = nietzscheTolk.random();
    		expect(nietzscheTolk.all).to.include(randomItem);
    	});
    });
});
