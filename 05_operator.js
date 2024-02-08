var num1 = 100;
var num2 = 200;
var sum = num1+num2;
console.log(sum);

function sumVar(num1,num2) {
    var sum = num1+num2;
    console.log(sum);
    
}
sumVar(100,200);

function subVar (num1,num2){
    var sub = num1-num2;
    console.log(sub);
}
subVar(200,100);
var num1 = 10;
var num2 = 3;

result = num1**3;
console.log(result);
 result = 10/3;
 console.log(result);
 result = 27%3;
 console.log((result));

 //comparison operator
 var num1 = "10";
 var num2 = 10;
 console.log(num1==num2);
 console.log(num1===num2);

 console.log(num1!=num2);
 console.log(num1!==num2);



 function squareWordLength(arg1){

 var length = arg1.length;
 var result = length**2;
 return result;

 }
 var resultReturn = squareWordLength("javascript");
 var resultReturn1 =squareWordLength("Google Chrome");
 console.log(resultReturn);
 console.log(resultReturn1);


 function show (){
    var str = "i m angular developer";
    var result = str.length;
    console.log(result);
    var result1 = str.split(" ");
   var totalworld =result1.length;
   console.log(result/totalworld);
     
 }
 show();


//ternary operator 

var age = 22;
var result = age>=21? "congratulation" : "sorry";
console.log(result);

var mark = 70;
var res = mark<=60 ? "allow for interview":"not allowed";
console.log(res);

// even or odd
var mynumber =7;
console.log(mynumber%2==0);
var result = mynumber%2==0 ?"Even": "ODD";
console.log(result);

var number = 10;
var number = -10;
var result = number>=0 ? "positive" : "negative";
console.log(result);

function greaterNum (num1,num2){
    var result = num1>num2 ? "greater": "not greater";
    console.log(result);

}
greaterNum(10,-10)
greaterNum(800,899)


function worldLength (word){
    var worldLength = word.length;
    var result = worldLength%2==0 ? "Even":"Odd";
    return result;

}
var reultValue = worldLength("JavaScript")
console.log(reultValue);
worldLength("developer")
console.log(worldLength("developer"));

function eligibleForMarriage(gender, age , boyName){
   var result = (gender == "male") && (age >=21) ? `${boyName}`: " not now";
   return result;

}
eligibleForMarriage("male",30,"rupesh");
console.log(eligibleForMarriage("male",30,"rupesh"));
console.log(eligibleForMarriage("female",20,"dipika"));
