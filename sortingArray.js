const array = [5,6,3,44,104,302,15];
array.sort((a,b) =>{
    return a>b ? 1: -1;
});
console.log(array);
array.sort((a,b)=>{
    return a>b ?-1:1;
})
console.log(array);
const nameArray =["Ridvika","Yashpal","Adviyta","Dipika"]
const sortNameArray = nameArray.sort();
console.log(sortNameArray);
const descendingArray = nameArray.reverse();
console.log(descendingArray);