// DataType
// DataType is a type of data

// There are 2 types of data,
// 1, premitive datatype =>
// Number,string ,boolean,undefine,null,Bigint,symbol

// 2, Non - primitive datatype  =>
// object , Array 
 
 // we find type of data type using typeof function

                // Primitive DataTypes
 let age = 12;
 let n = null;
 let fname = 'roshni'
 let bool = true;
 let u = undefined;
 let b = BigInt('123')
 let s = Symbol('hello');

 console.log(typeof age);

 console.log(typeof n);

 console.log(typeof fname);

 console.log(typeof bool);

 console.log(typeof u);

 console.log(typeof b);

 console.log(typeof s);

                //  Non-Primitive DataType
// Object:
// Object is a collection of  key pair values,,

const obj = {
    name: 'roshi',
    age: 23,
    course: "BCA"
}              

 console.log( typeof obj)
 console.log(obj.name); // obj['name']
 console.log(obj.age)
 console.log(obj.course);
              
 // we can changevalue of object
 console.log( obj['name'] =['roshan'])
 console.log(obj)

//  Array:
//  Array is a collection of types of data 

let marks = [98, 97, 89, 78, 98];
// print all arrays..
console.log(marks);