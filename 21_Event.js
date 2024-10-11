// Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:
// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked

// The change in the state of an object is known as events
// 1 ) Mouse event (Click,double Click ect.)
// 2 ) Keyboard events (keypress,keyup,keydown)
// 3 ) form events ( submit ect)

let btn = document.querySelector("#btn1");
btn.onclick = () => {
  alert("i am button 1");
};

btn.addEventListener("click", () => {
  alert("hello world ");
});

//we can fire multiple event

// Event Obnject :
// It is a special object that has details about the event.
// All event handlers have access to the Event object's properties and methods
 
        // btn.onclick = (e)=>{
        //     alert("i am button 2")
        // console.log(e)
        // }


        // addeventListener 
        let btn1 = document.querySelector("#btn2");
        // btn1.addEventListener('click',()=>{
        //     alert("hello world ")
        // })


         //we can fire multiple event

        // let button = () => {
        //     console.log("i am hendeler 0")
        // }
        // btn.addEventListener("click", button);
        // let button1 = () => {
        //     console.log("i am hendeler 1")
        // }
        // btn.addEventListener("click", button1);
        // let button2 = () => {
        //     console.log("i am hendeler 2")
        // }
        // btn.addEventListener("click", button2);
        // let button3 = () => {
        //     console.log("i am hendeler 3")
        // }
        // btn.addEventListener("click", button3);

        // btn.removeEventListener('click',button3)

    