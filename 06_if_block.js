var num = 10;
if (num>0) {
    console.log(`number is positive`);
    
}

function checkEvenOdd(num) {
    if (num%2==0) {
        //console.log(`num is even`);
        return "Even";
    }
    if (num%2!=0) {
        //console.log(`num is odd`);
        return "Odd"
    }
    
}
var resultReturn = checkEvenOdd(2);
console.log(`no is even : ${checkEvenOdd(2)}`);
console.log(checkEvenOdd(5));

function marriageEligibility (gender, age , boyName) {
    if (gender == "male" && age >= 21) {
        console.log(`You are ${boyName} eligible for marriage`);
        
    }
    else{
        console.log(`please try next time`);
    }
}
marriageEligibility("male",25,"Suresh");
marriageEligibility("male",20, "anil");
marriageEligibility("female", 30, "dipika");