let personProfile = {
    firstName:"", 
    lastName:"",  
    job:"",
    tempAge:0,
    isEligibleToVote:"",
    familyMember :new Array(),
    numberOfFamily:0,
    birthYear:0,
    checkVote: function() {
        this.tempAge = this.ageCalc(Number(this.birthYear));
        if (this.tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
        return this.isEligibleToVote;
    },
    ageCalc: function(){
        return new Date().getFullYear()- this.birthYear;
    }
};


personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.numberOfFamily = prompt("Number of Family  ? ");


//firstName = prompt("Enter Your First Name");
//lastName = prompt("Enter Your Last Name");
//job = prompt("What is Your Profession ?")
//birthYear = prompt("Enter Your birth year");
//h = prompt("What is Your height ?");
//w = prompt("What is Your weight ?");

console.log("Here is your Profile ")
console.log("Full Name: " + personProfile.firstName  + " "+personProfile.lastName);
console.log("Profession : " + personProfile.job);
console.log("Age : " + personProfile.ageCalc(personProfile.birthYear) + " " + "years old");
console.log("Is Eligible To Vote:" + personProfile.checkVote(personProfile.birthYear));

//eligibility
/*tempAge = ageCalc(birthYear);
if (tempAge>=18){
    isEligibleToVote = true;
}
else{
    isEligibleToVote = false; 
}
*/


//family

/*for (let i=0; i<parseInt(numberOfFamily);i++){
    familyMember[i] = prompt("Your family memebers" + (i+1));
}*/
for (let i = 0; i < parseInt(personProfile.numberOfFamily); i++) {
    personProfile.familyMember[i] = prompt("Your Family  Members " + (i + 1));
}
console.group("Family Members");
personProfile.familyMember.forEach(function(index, member){
    console.log("Family Member " + (index) +":"+ (member+1));
});


//function
//console.log("Age : " + tempAge + " " + "years old");
//function ageCalc(birthYear){
  //  return new Date().getFullYear()- birthYear;
//}






