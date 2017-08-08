pragma solidity ^0.4.13;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Liquet.sol";

contract TestLiquet {

  function testInitialBalanceUsingDeployedContract() {
    Liquet liquet = Liquet(DeployedAddresses.Liquet());

    uint expected = liquet.totalSupply();

    Assert.equal(liquet.balanceOf(msg.sender), expected, "Owner should have 10,000,000 Liquets initially");
  }

  function testNameUsingDeployedContract() {
    Liquet liquet = Liquet(DeployedAddresses.Liquet());

    byte32 name = liquet.name();

    Assert.equal(name, "Liquet", "The name should be Liquet");
  }
}
