let bank = {
    balance: 2000,
    balanceReceiver:1000,
    with:"",
    depo:"",
    trans:"",
    famount:0,
    withdraw: function(amount){
        if (this.balance >=100 && amount < this.balance-100 && amount <=700 && amount>=200){
            this.balance = this.balance - amount;
            return this.balance;
        }else{
            return " low."
        }
    },
    deposit: function(amount){
        this.balance = this.balance + Number(amount);
        return  this.balance;
    },
    transfer: function(amount){
        this.balance = this.withdraw(amount);
        this.balanceReceiver = this.balanceReceiver + Number(amount);
        return "The balance of the receiver is "+ this.balanceReceiver;

    },
    currentBalance: function(){
        return this.balance;
    }
    
}
service = prompt("Enter your preffered service among Withdraw, Deposit, Transfer, Balance.");
serve = service.toLowerCase();
(function(){
    if(serve === "withdraw"){
        bank.with = prompt("Enter the amount you want to withdraw.");
        console.log("The current amount is " + bank.withdraw(bank.with));
    }else if(serve === "deposit"){
        bank.depo = prompt ("Enter the amount you want to deposit.");
        console.log("The current amount is " +bank.deposit(bank.depo));
    }else if(serve === "transfer"){
        bank.trans = prompt("Enter the amount to be transffered.");
        console.log(bank.transfer(bank.trans));
    }else if(serve === "balance"){
        console.log("Your balance is " + bank.currentBalance());
    }else{
        console.log("Wrong input!");
    }
})(serve);

