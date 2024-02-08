const array =[20,31,40,25,23,11,29,9,60,2,11]
let sum = 0;
let emptyArray =[];
for (let index = 0; index < array.length; index++) {

    if (index%2==0) {
        const element = array[index];
        emptyArray.push(element);
        sum = sum+element;
        console.log(element);
        //console.log(emptyArray1);


        
    }
    
    
}
console.log(sum);
console.log(emptyArray);