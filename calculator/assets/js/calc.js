var num;
var num1;
var num2;
var amount;
let service;
let result;

service = prompt("do you want Addtion, Substraction, Multiplication or Division?");
num1 = prompt("Enter your first number");
num2 = prompt("Enter your second number");

let serve = service.toLowerCase();
if( serve === "substraction"){
    function sub(num1,num2){
        result = Number(num1) - Number(num2);
    }
}else{
    if (serve === "division") {
        if (Number(num2)=== 0){
            function div(num1,num2){
                result = Number(num1) / Number(num2);
            }
        }
        else{
            console.log("the denominator should not be zero.");
        }
    } else {
        if (serve === "addition") {
            amount = prompt("Enter the amount of numbers?");
            let arr = new Array(parseInt(amount));
            for(i=0; i<arr.length; i++){
                num = prompt("Enter the number");
                arr.push(num);
            }
            function add(arr){
                for (var i = 0; i < arr.length; i++) {
                    console.log(arr[i]);
                  }
            }
            
        } else {
            
        }
        
    }
}
  





