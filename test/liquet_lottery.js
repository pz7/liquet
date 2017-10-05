// Specifically request an abstraction for Liquet
var Liquet = artifacts.require("Liquet");
var LiquetLottery = artifacts.require("LiquetLottery");

contract('LiquetLottery', function(accounts) {
  it("should give a status", function() {
    return LiquetLottery.deployed().then(function(instance) {
      // TODO
    });
  });
  it("should take a bet", function() {
    return LiquetLottery.deployed().then(function(instance) {
      // TODO
    });
  });
  it("should pay the winner(s)", function() {
    return LiquetLottery.deployed().then(function(instance) {
      // TODO
    });
  });
});
