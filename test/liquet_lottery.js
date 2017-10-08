// Specifically request an abstraction for Liquet
var Liquet = artifacts.require("Liquet");
var LiquetLottery = artifacts.require("LiquetLottery");

contract('LiquetLottery', function(accounts) {
  it("should take a bet", function() {
    var lottery;
    return LiquetLottery.deployed().then(function(instance) {
      lottery = instance;
      // TODO
    });
  });
  it("should give a status", function() {
    var lottery;
    return LiquetLottery.deployed().then(function(instance) {
      lottery = instance;
      // TODO
    });
  });
  it("should pay the winner(s)", function() {
    var lottery;
    return LiquetLottery.deployed().then(function(instance) {
      lottery = instance;
      // TODO
    });
  });
});
