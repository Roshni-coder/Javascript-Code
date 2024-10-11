// IIFE :
// IIFE :Immediately invoked function Expression

// IIFE is a function that is called immediately as soon as it is defined,

// (function)();

function GetData(dataId, GetNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      // reject('error')
      if (GetNextData) {
        GetNextData();
      }
    }, 4000);
  });
}

// async function gd() {
//     console.log("fetching data.......");
//     await GetData(1231);
//     console.log("fetching data......");
//     await GetData("roshni");
// }

(async function () {
  console.log("fetching data.......");
  await GetData(1231);
  console.log("fetching data......");
  await GetData("roshni");
});
