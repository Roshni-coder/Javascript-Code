// Map() Function :
//  Map function : Create a new array with the result of some operations, The value its callback returns are used to from new array,,


// find squre of array numbers 
// let num = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newarr = num.map((val) =>{
//    return val*val
// })
// console.log(newarr)
// console.log(num)

// Example 2 :
// let a = num.map((value, ind, arr) => {
//     console.log(value, ind, arr);
//     return value + 1;
//  })
// console.log(a);

// Filtur() : 
// Create a new array of elements that given true for a condition

// find all even number in ne array 
// let num = [ 1,2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newarr = num.filter((val) => {
//     return val % 2 == 0;
//  })
// console.log(newarr);
// console.log(num);

// Example 2 :
// let a2 = num.filter((v) => {
//     return v > 20;
// })
// console.log(a2);


// reduce :
//  performs some operations & reduce the array to a single value , it rerurn that sing value

// find fqavctorial number 
 let num = [ 1,2, 3, 4, 5];

    let newarr = num.reduce((r1,r2)=>{
        return r1*r2;
    })
    console.log(newarr)
    console.log(num)

// Example 2
// let num = [1, 22, 34, 44, 52, 6, 7];
// let newarr = num.reduce((r1, r2) => {
//     return r1 + r2;
// })
// console.log(newarr);

