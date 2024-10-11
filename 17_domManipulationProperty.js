// dom manipulation properties

// tagname  : return tag for element node ;
let par = document.querySelector("div");
console.log(par);
console.log(par.tagName);

// innerTex :
// return the only all text content of the element and all its childrens and we can set it
let div2 = document.querySelectorAll("div");
console.dir(div2);
console.log((div2[1].innerText = "roshni bhoi"));

// innerHTML : return the plain text or HTML contents with its tags  the elements
let div = document.querySelectorAll("div");
console.log(div)
div[0].innerHTML = "<h1>This is first heading</h1>";
