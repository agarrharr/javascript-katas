var chai = require('chai');
var expect = chai.expect;
var fuzzyTime = require('./fuzzyTime');

describe("fuzzyTime", function() {
	it("should exist", function() {
		expect(fuzzyTime).to.exist;
	});
	it("should return a string", function() {
		expect(fuzzyTime('')).to.be.a('string');
	});
	it("should return o'clock", function() {
		expect(fuzzyTime('1:00')).to.equal("one o'clock");
		expect(fuzzyTime('2:00')).to.equal("two o'clock");
	});
});
