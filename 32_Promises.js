// Promises:
// Promise is for "eventual" complation of task, it is an object in js it is a solution to callback hell,

// let promise  = new promise((resolve,reject)=>{});

let promises = new Promise((resolve, reject) => {
  console.log("hello i'm Promise");
  // resolve("succes message")
  reject("error");
});

//example

//   function GetData(dataId,GetNextData){
//       return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//               console.log('data',dataId);
//               resolve("success");
//   reject('error')
//               if(GetNextData){
//                   GetNextData();
//               }
//           },2000);
//       });
//   };

// let p = GetData(2344);
// console.log(p)
// console.log(Promise)

// A javascript  promise object can be
// => pending the result is undifine
// => resolved : the result is a value(fulfilled) resolve(result)
// => reject : the result is an eror object reject(error)

// show the promise is succes/resolve
// promise.then()
// show the promise is rejected
// promise.catch()

const getPromise=()=>{
  return new Promise((resolve,reject)=>{
    console.log("i am a Promise");
    // resolve("success")
    reject("error")    
  })
};

let promise = getPromise();
promise.then((res)=>{
  console.log("Promise fullfilled",res)
})
promise.catch((err)=>{
  console.log("promise rejected",err)
})