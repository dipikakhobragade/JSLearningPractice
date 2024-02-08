let b1=100;
let b2=b1;
console.log(b2); ////deep cloning

const person ={
    namePerson : "dipika",
    age : 36
}
const player = person;///shalow cloning
console.log(player);
player.id =23;
console.log(person);

const newPlayer = {...person}


const array = [4,5,6,8,9,24,5,6,8]
let newArray = {...array};
console.log(newArray);
newArray.push(100);
console.log(newArray);
console.log(array);


