pragma solidity ^0.4.13;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Liquet.sol";

contract TestLiquet {

  function testInitialBalanceUsingDeployedContract() {
    Liquet liquet = Liquet(DeployedAddresses.Liquet());

    uint expected = 10000000000000000000000000;

    Assert.equal(liquet.balanceOf(msg.sender), expected, "Owner should have 10,000,000 Liquets initially");
  }

  function testInitialBalanceWithNewLiquet() {
    Liquet liquet = new Liquet();

    uint expected = 10000000000000000000000000;

    Assert.equal(liquet.balanceOf(msg.sender), expected, "Owner should have 10,000,000 Liquets initially");
  }

}
