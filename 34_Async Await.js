// Async :
// Async function always return a promise

// async function myfunc(){.....}

async function hello() {
  console.log("hello....");
}

// Await :
// Await pauses the execution of its surrounding async function until the promise is settled........

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWetherData() {
  await api();
  await api();
}

// Example of Async-await

// function GetData(dataId, GetNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data', dataId);
//             resolve("success");
            // reject('error')
//             if (GetNextData) {
//                 GetNextData();
//             }
//         }, 4000);
//     });
// };

// async function gd() {
//     console.log("fetching data.......");
//     await GetData(1231);
//     console.log("fetching data......");
//     await GetData("roshni");
// }
