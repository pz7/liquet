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

  function testTransferUsingDeployedContract() {
    Liquet liquet = Liquet(DeployedAddresses.Liquet());

    uint value = 10;

    bool success = liquet.transfer(0x1, value);

    Assert.isTrue(success, "Trasfer should be successful");
    Assert.equal(liquet.balanceOf(0x1), value, "Address should have 10 Liquets after transfer");
  }
}
