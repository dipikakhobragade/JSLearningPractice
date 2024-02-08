var num1 = 100;
var num2 = 200;
var str1 = "sweetu"
var str2 = "cutu"
function swapVariables(value1,value2){
console.log(value1,value2);
var temp = value1;
value1 = value2;
value2 =temp;
console.log(value1,value2);

}
swapVariables(num1,num2);
swapVariables(str1,str2);


function showFullName (){
    console.log(`My full name is : Dipika Shamrao Khobragade`);
}
showFullName();


function showAge(age) {
    console.log(`My age is : ${age}`);
}
showAge(36);

function fullName() {
    var name = "Dipika Khobragade";
    return name;
}
var returnName = fullName();
console.log(returnName);


function sumOfNumber(num1,num2,num3) {
    var sum = num1+num2+num3;
    return sum;
}
var returnSum = sumOfNumber(100,200,50);
console.log(returnSum);
var returnSum1 = sumOfNumber("hi ", "bye ", "good Morning");
console.log(returnSum1);

function swap (num1,num2){
    var temp = num1;
    num1=num2;
    num2=temp;
    console.log(num1,num2);
   return "swap values";
}
var returnResult = swap(100,200)
console.log(returnResult);