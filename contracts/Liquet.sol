pragma solidity ^0.4.13;

import '../zeppelin-solidity/contracts/token/StandardToken.sol';
import '../zeppelin-solidity/contracts/ownership/Claimable.sol';   

contract Liquet is StandardToken {
    string public constant name = "Liquet";
    string public constant symbol = "LQT";
    uint public constant decimals = 18;
    uint public constant totalSupply = 10 * (10**6) * (10**decimals);
    string public constant version = "1.0";

    function Liquet() {
        balances[msg.sender] = totalSupply;
    }

    function() {
        revert();
    }
}
