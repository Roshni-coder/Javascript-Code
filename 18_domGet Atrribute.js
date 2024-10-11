// getAtrribute:

// we can get attribute id and class
let first = document.querySelector("div");
console.log(first);
console.log(first.getAttribute("id"));

let second = document.querySelector("p");
console.log(second);
console.log(second.getAttribute("class"));

// serAtrribute :

// we can set attribute id and class on elements
let d = document.querySelector("h1");
console.log(d.setAttribute("class", "f-heading"));
console.log(d);

// we can change style of element
d.style.backgroundColor = "red";
d.style.color = "white";
first.style.backgroundColor = "yellow";

//  createElement
newbtn = document.createElement("button");
newbtn.innerHTML = "<b>Click me</b>";
console.log(newbtn);

let div = document.querySelector("div");
// Adds at the end of the node(inside) :
// div.append(newbtn);

// Adds at the start of node (inside) :
// div.prepend(newbtn);

// Adds before the node (outside) :
// div.before(newbtn);

// Adds after the node (outside)
div.after(newbtn);

second = document.querySelector("p");
// second.remove();

// remove the  atrribute
// let  f = first.removeAttribute("class")

// get all attributes
// let g = first.attributes
// console.log(g)
