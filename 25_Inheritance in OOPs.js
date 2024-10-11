// Inheritance :
// inharitance  is passing down properties and method from parent class to child lass

// what is method Overriding ? :
// if child and parent have same method . child's method will be used. .[method overiding].



class Parent{
    hello(){
        console.log("Hello")
    }
}
class Child extends Parent{
        
}

let obj = new Child();
console.log(obj.hello());

// Example 2 :

// class Person{
//     eat(){
//         console.log("eating");
//     }
//     sleep(){
//         console.log("sleeping")
//     }
//     work(){
//         console.log("do nothing");
        
//     }
// }
// class Engineer extends Person{
//     work(){
//         console.log('solv problems and build somthings new')
//     }
// }
// class Doctor extends Person{
//     work(){
//         console.log("treat Patients")
//     }
// }
// let engineer1 = new Engineer();
// console.log(engineer1.work())
// console.log(engineer1.eat())
// console.log(engineer1.sleep())

// let doctor1 = new Engineer();
// console.log(doctor1.work())
// console.log(doctor1.eat())
// console.log(doctor1.sleep())

// Usigng contructore
class person{
    constructor(){
        this.spicies ="homo Sapiens";
    }
    eat(){
        console.log('Eating');
    }
}
class Engineer extends person{
    work(){
        console.log('solv problems and buld somthing');
    }
}

let p1 = new person();
let e1 = new Engineer();
console.log(p1);
console.log(e1.spicies)
