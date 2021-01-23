let personProfile ={
    w: 0,
    h:0,
    values: "",
    bmi: 0,
    calcBmi: function(){
        this.bmi =  (Number(this.w)/(Math.pow(Number(this.h),2))).toFixed(2);
    },
    val:function(){
        if(this.bmi < 18.5){
            values = "Under weight";
        }
        else{
            if(this.bmi >=18.5 && this.bmi<=24.9){
                values = "Normal weight";
            }
            else{
                if (this.bmi>=25.0 && this.bim<=29.9) {
                    values = "Overweight";
                }
                else {
                    if (this.bmi>30.0){
                        values = "Obese";
                    }
                    
                }
            }
        }}
}
personProfile.calcBmi();
personProfile.val();
personProfile.h = prompt("What is Your height ?");
personProfile.w = prompt("What is Your weight ?");

//let we = parseInt(w);
//let hi = parseInt(h);



console.log("Your BMI:"+ personProfile.bmi);
console.log("You are "+ personProfile.values);

