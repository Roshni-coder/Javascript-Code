// callback Hell : nested c callbacks stacked below one another froming a pyramid structure,(pyramid of doom);

// this style of programing becomes difficult to understand and manage,

// nested code ......

let age = 19;
if (age >= 18) {
  if (age >= 60) {
    console.log("senior");
  } else {
    console.log("middle");
  }
} else {
  console.log("child");
}

// Callback Hell

function getData(dataid,nextData) {
  setTimeout(() => {
    console.log("data is", dataid);
    if(nextData){
      nextData();
    }
  },2000);
}

getData(1,()=>{
  console.log("Getting data 2.....");
  getData(2,()=>{
    console.log("Getting data 3...");
    getData(3)
  })
});

