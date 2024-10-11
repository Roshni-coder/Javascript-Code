// callback

// A callback is a function passed as an argument to another function,

function sum(a, b) {
  console.log(a + b);
}

function calculatore(a, b, sumCallback) {
  sumCallback(a, b);
}

calculatore(5, 10, sum);

// calculatore(3,3,(a,b)=>{
//     console.log(a+b);
// })
