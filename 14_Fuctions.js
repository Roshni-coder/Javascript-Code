//  Functions
// Function is the block of code that perform a specific task , can be invoked whenevr needed ,

// simple function

function myfun(){
      console.log("hello Roshni");
  }
myfun();
myfun();

               // function with arguments

//write a function to find  avrage 3 number.
function avrageNum(a, b, c) {
    console.log("The avrage number of :");
    return (a + b + c) / 3;
}
console.log(avrageNum(10, 2, 38));

                 // arrow function
                
// write a program to calculate sum of 2 number using arrow function.
const sum = (a,b) => {
    return a + b;
}
console.log(sum(50, 50));



// create a function using the 'function' keyword that takes a String as an argument & return the number of vowels in the string
// function CounVowel(str){
//     let count = 0;
//     for (const char of str) {
//          if(char ==='a' || char ==='e' || char ==='i' || char === 'o' || char ==='u'){
//             count++;     
//                 }
//             }
//             console.log(count)
//         }
// console.log(CounVowel('Roshni'));

// Second way

let CountVowel = (str) => {
    let count = 0;
    for (let char of str) {
         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
      }
      console.log(count)
}
CountVowel("aeiou")