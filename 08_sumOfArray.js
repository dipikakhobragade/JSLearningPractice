const array = [10,5,20,8,76,35,30,25];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}

const arrayNumbers =  [10,5,20,8,76,35,30,25];
let sum = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum+element;
    
}
console.log(sum);


const array2 = ["Madhuri", "Dipika", "Snehal", "Megha", "Parul"]
const array1 = ["Stew", "Bill"]

const concatArray = array+array1;
console.log(concatArray);