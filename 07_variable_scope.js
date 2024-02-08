function fact(num) {
    let factorial = 1;
    for (let index = num; index >=1; index--) {
        
        factorial = factorial*index;
    }
    console.log(factorial);
}
fact(5);
fact(8);