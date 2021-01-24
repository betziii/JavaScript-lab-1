let personProfile ={
    w: 0,
    h:0,
    values: "",
    bmi: 0,
    calcBmi: function(){
        this.bmi =  (Number(this.w)/(Math.pow(Number(this.h),2))).toFixed(2);
        return this.bmi;
    },
    val:function(){
        if(this.bmi < 18.5){
            this.values = "Under weight";
        }
        else{
            if(this.bmi >=18.5 && this.bmi<=24.9){
                this.values = "Normal weight";
            }
            else{
                if (this.bmi>=25.0 && this.bim<=29.9) {
                    this.values = "Overweight";
                }
                else {
                    if (this.bmi>30.0){
                        this.values = "Obese";
                        }
                    
                    }
                }
            }
        return this.values;
    }
};

(function(){
    personProfile.h = prompt("What is Your height ?");
    personProfile.w = prompt("What is Your weight ?");
    console.log("Your BMI:"+ personProfile.calcBmi());
    console.log("You are "+ personProfile.val());
})();


