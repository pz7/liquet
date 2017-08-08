// Specifically request an abstraction for Liquet
var Liquet = artifacts.require("Liquet");

contract('Liquet', function(accounts) {
  it("should put 100,000,000 Liquets in the first account", function() {
    return Liquet.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 1e+25, "100000000 wasn't in the first account");
    });
  });
  it("should transfer token correctly", function() {
    var liquet;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    return Liquet.deployed().then(function(instance) {
      liquet = instance;
      return liquet.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return liquet.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return liquet.transfer(account_two, amount, {from: account_one});
    }).then(function() {
      return liquet.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return liquet.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  it("should transfer token on other behalf correctly", function() {
    var liquet;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];
    var account_three = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_three_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;
    var account_three_ending_balance;

    var amount = 10;

    return Liquet.deployed().then(function(instance) {
      liquet = instance;
      return liquet.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return liquet.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return liquet.balanceOf.call(account_three);
    }).then(function(balance) {
      account_three_starting_balance = balance.toNumber();
      liquet.approve(account_two, amount, {from: account_one});
      return liquet.transferFrom(account_one, account_three, amount, {from: account_two});
    }).then(function() {
      return liquet.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return liquet.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();
      return liquet.balanceOf.call(account_three);
    }).then(function(balance) {
      account_three_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance, "Amount wasn't correctly untouched by the sent to the receiver");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });
});
