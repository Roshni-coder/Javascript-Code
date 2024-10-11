function asyncfunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
        resolve("success")
        },4000)
    })
}
function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2");
        resolve("success")
        },4000)
    })
}

// console.log("Fetching data1.......");
// let p1 = asyncfunc();
// p1.then((res)=>{
//     console.log(res);
// })
// nsole.log("Fetching data1.......");
// let p2 = asyncfunc2();
// p1.then((res)=>{
//     console.log(res);
// })

// step by step print data

// console.log("Fetching data1.......");
// let p1 = asyncfunc();
// p1.then((res)=>{
// console.log("Fetching data1.......");
// let p2 = asyncfunc2();
// p1.then((res)=>{})
// });

console.log("Fatching data 1 ....");
asyncfunc().then((res)=>{
    console.log("Fatching data 2 .....");
    asyncfunc2().then((res)=>{});    
})
