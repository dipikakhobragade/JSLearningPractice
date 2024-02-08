const array = [10,5,20,25,30,35,40,45,50]
let index = 0;
while (index < array.length) {
    console.log(array[index]);
    index++;
    
}
console.log(`===============even no=================`);

const arrayNumber = [5,10,42,62,35,40,20,15,8,12,38];
let index1 =0;
let sum = 0;
while (index1<arrayNumber.length) {
    const element = arrayNumber[index1];
    if (element%2==0) {
       sum = sum+element;
       console.log(element);
  
        
    }
   
    index1++
}
console.log(sum);