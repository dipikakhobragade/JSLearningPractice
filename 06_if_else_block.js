function marriageEligibility (gender, age , boyName) {
    if (age<0 || age == undefined) {
        return `hey ${boyName} you age ${age} not valid`;
        
    }
    // if (age == undefined) {
    //     return `hey ${boyName} you age ${age} not valid`;
        
    // }
    if (gender == "Male" && age >= 21) {
        var str =`You are ${boyName} eligible for marriage`;
        return str;
        
    }
    else{
       var str =  `please try next time`;
       return str;
    }
}
var result = marriageEligibility("Male",25,"Suresh");
console.log(result);
var result = marriageEligibility("Male",-30, "anil");
console.log(result);
var result = marriageEligibility("Male", undefined,"dipika");
console.log(result);