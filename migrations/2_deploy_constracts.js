var Liquet = artifacts.require("Liquet.sol");
var LiquetLottery = artifacts.require("LiquetLottery.sol");

module.exports = function(deployer) {
  deployer.deploy(Liquet);
  deployer.deploy(LiquetLottery)
};
