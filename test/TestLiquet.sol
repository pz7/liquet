pragma solidity ^0.4.13;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Liquet.sol";

contract TestMetacoin {

  function testInitialBalanceUsingDeployedContract() {
    Litquet liquet = MetaCoin(DeployedAddresses.Liquet());

    uint expected = 100000000;

    Assert.equal(liquet.getBalance(tx.origin), expected, "Owner should have 100,000,000 MetaCoin initially");
  }

  function testInitialBalanceWithNewMetaCoin() {
    Liquet liquet = new Liquet();

    uint expected = 100000000;

    Assert.equal(liquet.getBalance(tx.origin), expected, "Owner should have 100,000,000 MetaCoin initially");
  }

}
