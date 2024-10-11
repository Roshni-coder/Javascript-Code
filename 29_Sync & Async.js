// Synchronouns :
// means the code runs in a particular sequence of intruction given in the program, Each intruction waits for the previos intruction to completion,

console.log(a);
console.log(b);
console.log(c);

// Asynchronouns :
// Due to synchronons programing  sometime imp instructions get blocked due to some previous instructions, which causes a delay in the UL Asynchronouns code execution allows to execute next instructions immediatly and doesn't  block the flow,

function hello() {
  console.log("hello");
}
setTimeout(hello, 3000);

// Example of Asynhronounce program

console.log("one");
console.log("two");
console.log("three");

setTimeout(() => {
  console.log("good morning");
}, 4000);

console.log("four");
