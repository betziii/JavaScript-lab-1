var num;
var num1;
var num2;
var amount;
let service;
var result = 0;

service = prompt("do you want Addtion, Substraction, Multiplication, Division, Maximum, Minimum, Average, Square or Square Root?");
let serve = service.toLowerCase();
(function(){
    if( serve === "substraction"){
        num1 = prompt("Enter your first number");
        num2 = prompt("Enter your second number");
        sub(num1,num2);
        function sub(num1,num2){
            result = Number(num1) - Number(num2);
            console.log("The result is "+ result);
        }
    }else if (serve === "division") {
        num1 = prompt("Enter your first number");
        num2 = prompt("Enter your second number");
        if (Number(num2)=== 0){
            function dive(num1,num2){
                result = Number(num1) / Number(num2);
                console.log("The result is "+ result);
            }
            dive(num1,num2);
    
        }
        else{
            console.log("the denominator should not be zero.");
        }
    }else if (serve === "square") {
        numb = prompt("Enter your number");
        (function square(){
            result = Math.pow(numb,2);
            console.log("The result is "+ result);
        })(numb)
        
    }else if (serve === "addition") {
        amount = prompt("Enter the amount of numbers?");
        let arr = new Array();
        for(i=0; i<amount; i++){
            num = prompt("Enter the number");
            arr.push(num);
        }
        arr.forEach(add);
        function add(item){
            result += Number(item);
        }
        console.log("The result is "+ result);
                
    } else if(serve==="multiplication"){
        amount = prompt("Enter the amount of numbers?");
        let arr = new Array();
        for(i=0; i<amount; i++){
            num = prompt("Enter the number");
            arr.push(num);
        }
        arr.forEach(add);
        function add(item){
            result *= Number(item);
            }
        console.log("The result is "+ result);
    }else if(serve==="maximum"){
        amount = prompt("Enter the amount of numbers?");
        let arr = new Array();
        for(i=0; i<amount; i++){
            num = prompt("Enter the number");
            arr.push(num);
        }
        (function maximum(){
            let max = arr[0];
            for (let i = 1; i < arr.length; ++i) {
                if (arr[i] > max) {
                  max = arr[i];
                }
              }
              console.log("The result is "+ max);  
        })(arr);
        
    }else if(serve==="minimum"){
        amount = prompt("Enter the amount of numbers?");
        let arr = new Array();
        for(i=0; i<amount; i++){
            num = prompt("Enter the number");
            arr.push(num);
        }
        (function minimum(){
            let min = arr[0];
            for (let i = 1; i < arr.length; ++i) {
                if (arr[i] < min) {
                  min = arr[i];
                }
              }
              console.log("The result is "+ min);  
        })(arr);
                
    }else if(serve==="average"){
        amount = prompt("Enter the amount of numbers?");
        let arr = new Array();
        for(i=0; i<amount; i++){
            num = prompt("Enter the number");
            arr.push(num);
        }
        (function average(){
            var tot = 0;
            for(var i = 0; i < arr.length; i++) {
                tot += arr[i];
            }
            var avg = tot / arr.length;
            console.log("The result is "+ avg);
              })(arr);
              
    }else if (serve === "square root") {
        numbe = prompt("Enter your number");
        
        if (Number(numbe)> 0){
            (function squareroot(){
                result = Math.sqrt(Number(numbe));
                console.log("The result is "+ result);
            })(numbe);
        }
        else{
            console.log("The number should not be negative.");
        }
    }

})(serve);
