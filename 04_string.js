var greet = "Good Morning";
console.log(typeof greet);
console.log(greet.length);
console.log(greet.charAt(3));
console.log(greet.charAt(greet.length-1)); 
console.log(greet.indexOf('n'));
console.log(greet.indexOf('o'));
console.log(greet.indexOf('a'));
console.log(greet.lastIndexOf('o'));
console.log(greet.replace("Morning","Evening"));
console.log(greet.toUpperCase());
console.log(greet.toLowerCase());

var myName = "   Dipika   Khobragade   "
console.log(myName.length);
var trimName = myName.trim();
console.log(trimName,trimName.length);
console.log(myName.length-trimName.length);
console.log(myName.trimStart(),myName.trimEnd());
console.log(greet.includes("Mor"));
console.log(greet.includes("last"));
console.log(greet.split(" "));
console.log(greet.slice(5,12));
console.log(greet.slice(0,4));
console.log(greet.split(" ").length);

var myList = "Dipika, Ridvika, Bhushan, Ramesh"
var mySplit = myList.split(",")
console.log(mySplit.length);
console.log(myList.split(" "));
console.log(greet.slice(0,5));
console.log(greet.substring(2,4));
console.log(greet.slice(2,4));