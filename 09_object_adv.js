const employee = {
    id: 12345,
    employeeName : "dipika",
    country : "India",
    city : "mumbai"


}

for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);
        
    }
}
const keys =Object.keys(employee);
console.log(keys);
const value = Object.values(employee);
console.log(value);
const entries = Object.entries(employee);
console.log(entries[0]);

//in operator

let id ="id" in employee;
console.log(id);


//object freezing

const player ={
    namePlayer :"virat",
    wicket : 120,

}

const employee1 ={
    NameEmploee : "dipika",
    id: 12356
}
let newarray ={};
Object.assign(newarray, player,employee1);
console.log(newarray);
Object.freeze(player);
player.totalBall = 345;
console.log(player);
delete player.wicket;
console.log(player);