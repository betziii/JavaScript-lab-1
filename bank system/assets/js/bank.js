let bank = {
    balance: 2000,
    balanceReceiver:1000,
    with:"",
    depo:"",
    trans:"",
    exAmount:0,
    dollar: 39.37,
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
    },
    exchangeDtoB: function(amount){
        return amount * this.dollar;

    },
    exchangeBtoD: function(amount){
        return amount/ this.dollar;
    }
    
};
service = prompt("Enter your preffered service among Withdraw, Deposit, Transfer, Balance, Exchange.");
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
    }else if(serve === "exchange"){
        (function(){
            let dbb= prompt("If you want to exchange Dollar to Birr enter 1, if you want to exchange Birr to Dollar enter 2.");
            if(dbb === "1"){
                bank.exAmount = prompt("Enter how much you want to exchange from Dollar to Birr.");
                console.log("Your exchange amount is " + bank.exchangeDtoB(bank.exAmount));
            }else if(dbb === "2"){
                bank.exAmount = prompt("Enter how much you want to exchange from Birr to Dollar.");
                console.log("Your exchange amount is " + bank.exchangeBtoD(bank.exAmount));
            }else{
                console.log("Wrong input!");
            }
        })();
        
        
    }else{
        console.log("Wrong input!");
    }
})(serve);

