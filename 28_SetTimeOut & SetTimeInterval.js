
// setTimeout() function:

// setTimeout( function, duration) :
// This function calls function after duration milliseconds from now. This goes for one execution.

//  Let’s see an example =>

let a = setTimeout(function () {
  console.log("Hello Good Morning");
}, 2000);

console.log(a);

// setInterval() function:

// setInterval(function, duration) :

//  This function calls function after every duration milliseconds. This goes for unlimited times.
// Let’s see an example :
// It triggers the alert(‘Hello’) after every 2000 milliseconds, not only once.

 let b = setInterval(function() { 
    alert('Hello good night !');
}, 5000);
console.log(b)

