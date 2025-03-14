//self invoked closure/ immediately involking the function
const bankAccount = (function (){
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
})();//immediately invoking it here 
    //use whenever you want to execute the closure only once but doesnt want to return multiple instances  then you can use self invoking closures 

    //closure ends 
    //var firstAccount = bankAccount(); the function wouldnt need to be invoked her anymore
    //var SecondAccount = bankAccount();
    //console.log(firstAccount.getCurrentBalance());//1000
    //console.log(firstAccount.deposit(200));//1200
    //console.log(`Account Balance After withdrawal: ${firstAccount.getCurrentBalance}`);//1150
    //console.log(accountBalance);//not definied not accessible outside the closure 
    // it is only accessible by withdraw and deposit function
    
    console.log (`Initial Account Balance: ${bankAccount.getCurrentBalance()}`);//1000
    console.log (` Initial Account Balance: ${bankAccount.getCurrentBalance()}`);//1000
    
    
    bankAccount.deposit(200);
    console.log (`Account Balance After Deposit: ${bankAccount.getCurrentBalance()}`);//1200
    
    bankAccount.deposit(100);
    console.log (`Account Balance After Deposit: ${bankAccount.getCurrentBalance()}`);//1100
    
    
    bankAccount.withdraw(50);
    console.log (`Account Balance After Withdraw: ${bankAccount.getCurrentBalance()}`);//1150
    
    bankAccount.withdraw(100);
    console.log (`Account Balance After Withdraw: ${bankAccount.getCurrentBalance()}`);//1100

//we are automatically getting only single account balance
