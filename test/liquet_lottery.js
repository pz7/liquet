// Specifically request an abstraction for Liquet
var Liquet = artifacts.require("Liquet");
var LiquetLottery = artifacts.require("LiquetLottery");

contract('LiquetLottery', function(accounts) {
  var bet = { "a":1, "b":2, "c":3, "d":4, "e":5, "f":6};
  it("should take a bet", function() {
    var lottery;
    return LiquetLottery.deployed().then(function(instance) {
      lottery = instance;
      lottery.bet(bet);
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
