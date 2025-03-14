//simple closure example
function BankAccountDeposit() {
    var currentBalance = 1000;

    function deposit(depositAmount) {
        currentBalance = currentBalance + depositAmount;
        return `Account Balance: ${currentBalance}`;
    }
    return deposit;
}
var dp = BankAccountDeposit();
console.log(dp(2000));//output: 3000
console.log(currentBalance); // this cannot be accessed
console.log(dp(3000));//output: 4000

//the goal is to not access the currentbalance directly 
//that is why closure is used 