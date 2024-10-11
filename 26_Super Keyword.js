//super
// The super keyword is used to call be contructore of its parent class to access the parent's properties and method,
// super(args) // calls parents constructor

// class person {
//   constructor(name) {
//     console.log("enter parent contructore ");
//     this.species = "Home spicins";
//     this.name = name;
//   }

//   eat() {
//     console.log("Eating......");
//   }
// }

// class Engineer extends person {
//   constructor(branch, name) {
//     console.log("Enter child contructore");
//     super(); // To invoke paarent class contructore
//     super(name); // pass on parent oobj
//     this.branch = branch;
//     console.log("exite child constructore");
//   }
//   work() {
//     super.eat();
//     console.log("solv problems and build something");
//   }
// }

// let engobj = new Engineer("computer science", "roshni");
// let p1 = new person("roshni");
// console.log(engobj.work());

// Prctice Q=2 :
// Create a new class calles Admin which inherits from user , add a new method called editData to Admin that allow it is  to allows it to edit website data,

let Data = "This is Screat";
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viwedata() {
       console.log("data",Data)
    }
}

class admin extends user {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        console.log("something is new ")
    
    }
}
let stud1 = new user('Roshni', 'roshni@31gmail.ocm');

let stud2 = new user("dharti", "dharti@334gmail.com")

let teacher1 = new admin('Avani', 'avani@gamil.com')

let student = new admin("dimpal","dimpal32@gmail.com")
