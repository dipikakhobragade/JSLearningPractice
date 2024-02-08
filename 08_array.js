const arrayOfNum = [0,2,4,5,6,7,8,0,4,3,2,5,6];
console.log(arrayOfNum);
//total no of element
let totalArray = arrayOfNum.length;
console.log(totalArray);
let isAvailable = arrayOfNum.includes(6);
console.log(isAvailable);
console.log(arrayOfNum.indexOf(8));

let arrayOfNums = [10,20,25,15,30,40,35,5];
console.log(arrayOfNums[2]);
arrayOfNums[3] = 45;//modifing value
console.log(arrayOfNums);

arrayOfNums[6] = 50;
console.log(arrayOfNums);
arrayOfNums.push(60);
console.log(arrayOfNums);
arrayOfNums.unshift(0);
console.log(arrayOfNums);

let arrayOfNumbers = [20,30,40,50,10,55];
arrayOfNumbers.pop(55);
console.log(arrayOfNumbers);
arrayOfNumbers.shift(20);
console.log(arrayOfNumbers);
let arrayOfNumber = [20,30,40,50,10,55,6,8,9,35];

console.log(arrayOfNumber.slice(3));
console.log(arrayOfNumber.slice(2,5));
let removeElement =arrayOfNumber.splice(4);
console.log(removeElement);//remove element frm index 4

let arrayOfNumber1 = [20,30,40,50,10,55,6,8,9,35];
let arrayRemove  = arrayOfNumber1.splice(2,4);
console.log(arrayRemove);
console.log(arrayOfNumber1);
let arrayOfNumber2 = [20,30,40,50,10,55,35];
arrayOfNumber2.splice(2,0,22);
console.log(arrayOfNumber2);
arrayOfNumber2.splice(4,0,2,3,4)
console.log(arrayOfNumber2);
arrayOfNumber2.splice(2,1,10,5);
console.log(arrayOfNumber2);
console.log(arrayOfNumber2[0]);
console.log(arrayOfNumber2[arrayOfNumber2.length-1]);
console.log(arrayOfNumber2.length);
console.log(arrayOfNumber2[arrayOfNumber2.length-2]);






let numberOfArray = [10,5,20,40,60,70,30];
numberOfArray.splice(2,1);
console.log(numberOfArray);
numberOfArray.splice(2,0,35);
console.log(numberOfArray);
numberOfArray.splice(2,1,45);
console.log(numberOfArray);

console.log(numberOfArray.slice(4));
console.log(numberOfArray.slice(0,2));
console.log(numberOfArray[numberOfArray.length-1]);

//traversing over array
const array = [20,30,40,50,60,75,25,10];
let sum = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + element
    //console.log(element);
    
}
console.log(sum);