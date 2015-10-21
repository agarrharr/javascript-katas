var chai = require('chai');
var expect = chai.expect;
var merge = require('./mergeOverlappingIntervals');

describe("merge", function() {
	it("should exist", function() {
		expect(merge).to.exist;
	});
	it("should return an array", function() {
		expect(merge([])).to.be.an('array');
	});
	it("should return a single array", function() {
		expect(merge([1, 2])).to.deep.equal([1, 2]);
		expect(merge([2, 3])).to.deep.equal([2, 3]);
	});
	it("should return overlapping arrays", function() {
		expect(merge([5, 12], [8, 10])).to.deep.equal([5, 12]);
	});
});
