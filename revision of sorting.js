const numberArray = [34,56,78,90,23,29,30,11,2,34,5,6];
numberArray.sort((a,b)=>{
   return a>b ?1 :-1;
})
console.log(numberArray);

numberArray.sort((a,b)=>{
    return a>b ?-1:1;

})
console.log(numberArray);


const nameArray = ["dipika","bhushan","ridvika"]
const sortedArray = nameArray.sort();
console.log(sortedArray);
const sortArray = nameArray.reverse();
console.log(sortArray);

const array =[34,56,78,90,23,29,30,11,2,34,5,6];
array[3]=70;
console.log(array);    
