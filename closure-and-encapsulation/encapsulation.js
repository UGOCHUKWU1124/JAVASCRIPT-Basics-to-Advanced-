function bankAccount (){
var accountBalance = 1000;
function deposit (depositAmount){
    accountBalance = accountBalance + depositAmount;
    //return `Account Balance After Deposit: ${accountBalance}`;
}
function withdraw (withdrawalAmount){
    accountBalance = accountBalance - withdrawalAmount;
    //return `Account Balance After withdrawal: ${accountBalance}`;
    //you can choose not to write a return value  then write it in the console.log
}
function getCurrentBalance (){
   // return `Current AccountBalance is: ${accountBalance}`;
    return accountBalance;
}
return {deposit,withdraw,getCurrentBalance};////return public methods // turning them from private to public
}  // the closure

//closure ends 
var firstAccount = bankAccount();
var SecondAccount = bankAccount();
//console.log(firstAccount.getCurrentBalance());//1000
//console.log(firstAccount.deposit(200));//1200
//console.log(`Account Balance After withdrawal: ${firstAccount.getCurrentBalance}`);//1150
//console.log(accountBalance);//not definied not accessible outside the closure 
// it is only accessible by withdraw and deposit function

console.log (`Initial first Account Balance: ${firstAccount.getCurrentBalance()}`);//1000
console.log (`Initial second Account Balance: ${SecondAccount.getCurrentBalance()}`);//1000


firstAccount.deposit(200);
console.log (`First Account Balance After Deposit: ${firstAccount.getCurrentBalance()}`);//1200

SecondAccount.deposit(100);
console.log (`Second Account Balance After Deposit: ${SecondAccount.getCurrentBalance()}`);//1100


firstAccount.withdraw(50);
console.log (`First Account Balance After Withdraw: ${firstAccount.getCurrentBalance()}`);//1150

SecondAccount.withdraw(100);
console.log (`Second Account Balance After Withdraw: ${SecondAccount.getCurrentBalance()}`);//1100

