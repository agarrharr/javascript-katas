var chai = require('chai');
var expect = chai.expect;
var printKMoves = require('./langtons-ant');

describe("printKMoves", function() {
  it("should return 0 moves", function() {
    expect(printKMoves(0)).to.equal("0");
  });
  it("should return 1 moves", function() {
    expect(printKMoves(1)).to.equal(
`00
01`);
  });
  it("should return 2 moves", function() {
    expect(printKMoves(2)).to.equal(
`000
010
010`);
  });
  it("should return 3 moves", function() {
    expect(printKMoves(3)).to.equal(
`0000
0000
0010
0110`);
  });
  it("should return 4 moves", function() {
    expect(printKMoves(4)).to.equal(
`00000
00000
01100
01100
00000`);
  });
  it("should return 5 moves", function() {
    expect(printKMoves(5)).to.equal(
`000000
000000
000000
001000
001100
000000`);
  });
  it("should return 6 moves", function() {
    expect(printKMoves(6)).to.equal(
`0000000
0000000
0001000
0010000
0011000
0000000
0000000`);
  });
  it("should return 7 moves", function() {
    expect(printKMoves(7)).to.equal(
`00000000
00000000
00000000
00001100
00010000
00011000
00000000
00000000`);
  });
  it("should return 8 moves", function() {
    expect(printKMoves(8)).to.equal(
`000000000
000000000
000000000
000011000
000101000
000110000
000000000
000000000
000000000`);
  });
  it("should return 9 moves", function() {
    expect(printKMoves(9)).to.equal(
`0000000000
0000000000
0000000000
0000000000
0000011000
0000111000
0000110000
0000000000
0000000000
0000000000`);
  });
});
