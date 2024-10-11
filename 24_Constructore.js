// constructer :

// Constructer() method is : \

// automatically invoked by new contructore

// we initialize object while at a time we can do something called when we use contructore

class Car {
  // constructore is method
  constructor(brand, mileage) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("Car is start");
  }
  stop() {
    console.log("Car is stop");
  }
}
let car1 = new Car("fortuner", 10);
console.log(car1);

let car2 = new Car("lexus", 12);
console.log(car2);

// Example :

class Android{
constructor(){
    console.log("This is Android phone...")
}
     constructor(company,RAM,price,color){
        console.log("This is Android phone...")
        this.company =company;
        this.RAM = RAM;
        this.color = color;
        this.price = price;
    }

    start(){
        alert("Turn on...")
    }

    stop(){
        alert('Turn off')
    }
}

let phone1 = new Android('sumsunge','64GB',15000,'black');
console.log(phone1)
let phone2 = new Android('Vivo Y21', '64GB', 20000, 'blue');
console.log(phone2);
