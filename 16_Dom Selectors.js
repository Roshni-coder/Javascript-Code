// What is Window Object  :

// The Window Object represent  an open window in a browser,It is borwser's object (not Javascript's) & is automatically created by brouser.
// It is a global object with lots of properties & methods.

// What is Dom?
// When a web page is loaded, the browser creates a Document Object Model of the page.
// The Document object model is a programing interface that allows you to intract with a web page's structure,style and contents

// what is Bom?
// The Browser Object Model (BOM) is a collection of browser objects that allow JavaScript to interact with a browser and its window, history, and more.

// Dom Manipulation

//  how to selecting with Id :
let heading = document.getElementById("h1-id");
heading.style.color = "red";
console.log(heading);

//  how to selecting with class :
// only can be acces 1 class at a time
let getClass = document.getElementsByClassName("class1");
getClass[0].style.color = "blue";
getClass[1].style.color = "pink";
console.log(getClass);

//  how to selecting with tagName:
let getTag = document.getElementsByTagName("button")[0];
getTag.style.background = "green";
console.log(getTag);

//  return first element
let firstEle = document.querySelector(".class1");
console.dir(firstEle);

// Return a nodeList of selected id,class or tagname
let allEle = document.querySelectorAll(".cart");
allEle[0].style.background = "red";
allEle[1].style.background = "green";
allEle[2].style.background= "blue";
console.log(allEle);
