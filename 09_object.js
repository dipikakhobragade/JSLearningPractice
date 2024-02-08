//object literals

let student = {
    firstName : "Dipika",
    lastName : "Khobragade",
    age : 35,
    id : 12345,
    collegeName : "IICMR",
    address : {
        street : "palava road",
        pinCode : 1256788

    },
    friends : ["dipika","bhushan","ridvika"],

    show : function(){
        console.log(`i m dipika`);

    },
    addressDetails: function(){
        return `address street : ${this.address.street} city : ${this.address.pinCode}`
    }

};
let result = student.addressDetails();
console.log(result);
student.show();
console.log(student.friends);
console.log(student.friends[student.friends.length-1]);
console.log(student);
console.log(typeof student);
console.log(student.firstName);
student.collegeName = "COEP Pune";
console.log(student);
student.city = "Mumbai";
console.table(student);
delete student.id;
console.log(typeof student.address);
console.log(typeof student.age);
console.log(student.address.street);
student.address.pinCode = 678904;
console.log(student.address);
student.mark = {
    eng:80,
    math:90,
    hindi : 100
}
console.table(student);



const sbiBank ={

    bankName : "SBI",
    IFSC
}