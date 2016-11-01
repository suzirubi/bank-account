

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;

}


BankAccount.prototype.deposit = function (deposit){
  return this.amount = deposit + this.amount;
  console.log("function: ", this.amount);
}

BankAccount.prototype.withdrawal = function (withdrawal){
  return this.amount = this.amount - withdrawal ;
}







$(document).ready(function (){
var account = new BankAccount("","");
  $("#form1").click(function (event){
    event.preventDefault();

    var userName = $("#userName").val();
    var userInitialBalance = parseInt($("#userInitialBalance").val());

    account.name = userName;
    account.amount = userInitialBalance;

    console.log(account.amount);
//set price here, using values from our array


    $("#runningBalanceWell").text(account.amount);
    //call reset function
    $("#openingBalance").hide();
    $("#userNameHead").text(account.name);

  });

  $("#form2").click(function (event){
    event.preventDefault();

    var userDeposit = parseInt($("#userDeposit").val());
    var userWithdrawal = parseInt($("#userWithdrawal").val());

    // var newBalance = new BankAccount("", );
    console.log(account.deposit(userDeposit));
    console.log(account.withdrawal(userWithdrawal));

    $("#runningBalanceWell").text(account.amount);
  });

});
