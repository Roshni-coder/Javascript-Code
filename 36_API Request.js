// Fetch API
// API stands for Application Program Interface
// The fetch API provides an interface for fetching (sending/receiving)resources.
// It use Request and Response objects.
// The fetch Method is used tp fetch a resource(Data).

// let promise = fetch(url,[options])
// https://goweather.herokuapp.com/weather/Curitiba

// js can be used to send and returns information from the network when needed

const factPera = document.querySelector('#fact');
const button = document.querySelector('#btn');

async function getData(){
    console.log("getting data.....")
    let response =await fetch('https://jsonplaceholder.typicode.com/todos/');
    console.log(response);
    let data = await response.json();   
    console.log(data);
 
    factPera.innerText =data[5].title;
    
    
}

button.addEventListener("click",getData);


// async function GetWetherData() {
//     let resopnse = await fetch('https://goweather.herokuapp.com/weather/Curitiba')
//     let data = await resopnse.json();
//     console.log(data)
// }

// GetWetherData();

// Understanding Terms

// AJAX is Asynchronous JS & XML

// JSON is javascript object notation

// Json() method : return a secound promise that resolve with the result of pasing the response body text as json (Input is JSON ,output is object)


// Request & Response

// HTTP Verbs: (Hyper Text Transfer Protocol)

// HTTP response headers also contain details about the responses such as content type , HTTP status code etc,
