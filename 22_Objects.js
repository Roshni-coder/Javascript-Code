// Objects :
// A Javascript object is an entity having state and behavior(properties and method)
// const student = {
//     name :'roshni',
//     age:20,
//     course:'BCA',
//     mark :95.9,
//     printmark: function(){
//         console.log("mark is " + this.mark) // this means onject name
//     }
// }

// console.log(student.printmark())

// JS object have a special property called prototype
// we can set prototype using __proto__ (it's refrence to object)

const employees ={
    caltex(){
        console.log('text rate is 10%');
    }
}
const newemp ={
    salary :'50000Rs'
}
const oldemp = {
    salary: '50000Rs',
    caltex(){
        console.log("text rate os 20%")
    }
}
// we can use one  object function into another object

newemp.__proto__ = employees;
oldemp.__proto__ =employees;

console.log( "salary is" ,newemp.salary)
console.log("tex is ",newemp.caltex())


console.log( "salary is" ,oldemp.salary)
console.log("tex is ",oldemp.caltex())
