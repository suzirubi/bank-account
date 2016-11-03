
// business logic

function BankAccount (name, amount) {
  this.name = name;
  this.amount = amount;
}

BankAccount.prototype.balanceUpdate = function (deposit, withdrawal) {
  return this.amount += deposit - withdrawal;
}

var RunningBalance = [];
console.log(RunningBalance);

// function resetFields () {
//   $("input#userDeposit").val("");
//   $("input#userWithdrawal").val("");
//   $("input#runningBalanceWell").val("");
// }

// user interface

$(document).ready(function() {

  $("form#initialBalance").submit(function(event) {
    event.preventDefault();

    var userName = $("input#userName").val();
    var userInitialAmount = parseInt($("input#userInitialAmount").val());
    var userBalance = new BankAccount(userName, userInitialAmount);
    RunningBalance.push(userBalance);

    $("#runningBalanceWell").text(RunningBalance[0].amount);

    $("#openingBalance").hide();
    $("#userNameHead").text(userBalance.name);

  });

  $("form#runningBalance").submit(function(event) {
    event.preventDefault();

    var userDeposit = parseInt($("input#userDeposit").val());
    var userWithdrawal = parseInt($("input#userWithdrawal").val());
    var userTransaction = RunningBalance[0].balanceUpdate(userDeposit, userWithdrawal);


    $("#runningBalanceWell").text(userTransaction);
    // resetFields();
  });

});
