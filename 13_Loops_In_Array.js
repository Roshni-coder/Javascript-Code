        //  using for loop

// let num = [2, 34, 123, 4, 21, 234];
// for (i = 0; i <= num.length; i++){
//     console.log(num[i]);
// }


          //forEach loop
// let names = ['roshu', 'roshni', 'mituul', 'roshi'];
// names.forEach(element => {
//     console.log(element)
// });


// let num = [2, 34, 123, 4, 21, 234];
// num.forEach((e) => {
//     console.log(e * e);
// });
 

// Array.from() =>
//  it use for create an array,

let str = "roshu";
let newarrr = Array.from(str);
console.log(newarrr);

// for of loop is use to access element.
let names = ['roshu', 'roshni', 'mituul', 'roshi'];
for (const i of names) {
        console.log(i[1]);
 }