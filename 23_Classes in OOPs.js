// Class :
// Class is a blueprint of objects
// Class is a program-code (Blueprint)template for creati ng objects
// Those objects will have some state(variable) & some behaviour(functions) inside is

// class ToyotaCar{
//     start(){
//         console.log("Car Start");
//     }
//     stop(){
//         console.log("Car Stop");
//     }
//     setBrand(brand){
//         this.bradname = brand;
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner")
// let lexus = new ToyotaCar();
// lexus.setBrand(lexus);

// console.log(fortuner.bradname)
// console.log(fortuner.start())
// console.log(fortuner.stop());

// console.log(lexus.bradname)
// console.log(lexus.start())
// console.log(lexus.stop());

// How to create class and object

class car {
  start() {
    console.log(+" car start....");
  }
  stop() {
    console.log("car stop....");
  }

  setbrand(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }
}

let car1 = new car();
car1.setbrand("fortuner black", "white", "1cr");
// fortuner.setcolor("white");

let car2 = new car();
car2.setbrand("BMW", "black", "50Lakh");

// Prctice Q=1
// You are creating a website for your college , create a class user with 2 properties , name and email , its also has a method called viwedata() that allowes user to viwe website data,

// let Data = "this is Secreat data"

// class user{
//     constructor (name,email){
//         this.name = name ;
//         this.email = email;
//     }
//     viwedata(){
//         console.log("data"=,Data)
//     }
// }

// let stud1 = new user('Roshni','roshni@31gmail.ocm');
// console.log(stud1.viewdata());

// let stud2 = new user("dharti","dharti@334gmail.com")
// console.log(stud1.viewdata());