// Array ..
// Array is collection of items

let arr = [45, 65, 67, 789, 54, 97, 24, 67, 43];

//  find length of array
console.log(arr.length);

//  find type of array
console.log(typeof arr);

/// Array of indices

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);

//  loopin over an Array
// First Way 

// print all elements of an array,
//         for (const iterator of arr1) {
//             console.log(iterator)
// }

// Second Way

// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// Third way

        // arr1.forEach(e=>{
        //     console.log(e.toUpperCase())
        // })
    
    
 //  for a given array msrks o students  =[85,97,44,37,76,60],find avrage of marks of the entire class 

        //  let array = [85, 97, 44, 37, 76, 60]
        // let sum = 0;

        //  for(i=0;i<array.length;i++){
        //      sum = sum + array[i];
        // }

        // console.log(sum/6)

        // for (const val of array) {
        //     sum = sum+val
        // }

        // let avg =sum / array.length;
        // console.log(`the marks of avrage number id ${avg}`);
        
        // for a given array with price of 5 items  => [250,654,300,900,50]
        // All items have an offer 10% off on them change the array to store final price after applying offer,,

        // let item = [250, 654, 300, 900, 50];

        // for(let i = 0 ; i<item.length;i++){
        //   let offer = item[i]/10;
        //   item[i]= item[i]-offer;
        // }
        // console.log(item)

        // let i = 0;
        // for (const val of item) {

        //     console.log(`value at index ${i} = ${val}`)
        //     let offer = val / 10;
        //     item[i] = item[i] - offer;
        //     console.log(`value after offer ${i} = ${item[i]}`)
        //     i++;
        // }

        // Array's method 

        // let arr = ['roshni', 'bhoi', 'mitul', 'modi'];
        // let arr1 = ['bhoi', 'modi']

        // push() : Add to and
        // console.log(arr.push("roshu", "roshan"));
        // console.log(arr);

        // pop() : Delete from end and return 
        // console.log(arr.pop());
        // console.log(arr)

        // toString() : convert array to string.
        // console.log(arr.toString());


        // concat() : join multiple arrays & return result
        // console.log(arr.concat(arr1));

        // unshift() : add to start
        // console.log(arr.unshift('Add'));
        // console.log(arr)
        
        // shift() : delete from start & return
        // console.log(arr.shift());
        // console.log(arr)

        // slice() : return a piece of the array 
            // slice(StartInd,EndInd)
        // console.log(arr.slice(1,4));
            
        // splice() : Change original array (add, remove ,replace )
           //splice(StrtInd,DelCount,NewEle)
        
    //     let num =[1,2,3,4,5,6,7,8];
       // delete  elements
    //     console.log(num.splice(1,2,101,102))
    //     console.log(num)
        // add
    //     console.log(num.splice(6,0,601))
    //     console.log(num)

        // delete elements
    //     console.log(num.splice(4,1))
    //     console.log(num)/


    // create an array to store companies => "Bloomberg","Microsoft","Uber","Google","IBM","Netflix";

    let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

    // a, Remove the first company from the array.
    // console.log(companies.shift())

    // b, Remove Uber ,Add Ola in its place
    
    // console.log(companies.splice(2,1,'Ola'))
    // console.log(companies)

    // c, add Amazon At the end
     console.log(companies.push("Amazon"))
     console.log(companies);