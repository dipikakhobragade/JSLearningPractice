const array = [ 22,33,44,555,60,36]
array.sort((a,b)=> {
    return a>b ?1 :-1;
})
console.log(array);

const arrayNumber =[2,4,6,8,9,23,45,60,10,15]
sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    if (index%2 == 0) {
        const element = arrayNumber[index];
        sum= element+sum;
        console.log(element);
        //console.log(sum);
    }
   
    
}
console.log(sum);

const arrayNumber1 = [2,4,6,8,9,23,45,60,10,15]
sum= 0;
for (let index = 0; index < arrayNumber1.length; index++) {
    const element = arrayNumber1[index];

    if (element%2 ==0) {
        console.log(element);
        sum = sum +element;
        
    }
    
}
console.log(sum);

const arrayNumber2 = [2,4,6,8,9,23,45,60,10,15]
arrayNumber2[5] = 34;
console.log(arrayNumber2);



function isPrime(num){
    for (let index = 2; index < num; index++) {
        if (num%index == 0) {
            return false;
            
        }
        
    }
    return true;

}
console.log(`${isPrime(7) ? "yes":"no"}`);
console.log(`${isPrime(4) ? "yes":"no"}`);

