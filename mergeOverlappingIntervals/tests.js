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
});
