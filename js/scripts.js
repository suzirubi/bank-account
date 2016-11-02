
// business logic

function BankAccount (name, amount) {
  this.name = name;
  this.amount = amount;
}


BankAccount.prototype.deposit = function (deposit) {
  this.amount = this.amount + deposit;
}

BankAccount.prototype.withdrawal = function (withdrawal) {
  this.amount = this.amount - withdrawal;
}

function resetFields () {
  $("input#userDeposit").val("");
  $("input#userWithdrawal").val("");
  $("input#runningBalanceWell").val("");
}

// user interface

$(document).ready(function() {

  $("form#initialBalance").submit(function(event) {
    event.preventDefault();

    var userName = $("#userName").val();
    var userInitialAmount = parseInt($("#userInitialAmount").val());
    var userBalance = new BankAccount(userName, userInitialAmount);


    $("#runningBalanceWell").text(userBalance.amount);

    $("#openingBalance").hide();
    $("#userNameHead").text(userBalance.name);

  });

  $("form#runningBalance").submit(function(event) {
    event.preventDefault();

    var userDeposit = parseInt($("#userDeposit").val());
    var userWithdrawal = parseInt($("#userWithdrawal").val());
    var accountBalance = new BankAccount("","");
    accountBalance.deposit(userDeposit);
    accountBalance.withdrawal(userWithdrawal);

    $("#runningBalanceWell").text(accountBalance);
    resetFields();
  });

});
