import {expect} from 'chai';
import nietzscheTolk from './index';



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

        it('shold return an array of random items if passed a number', function () {
            var randomItems = nietzscheTolk.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(nietzscheTolk.all).to.include(item);
            })
        });
    });
});
