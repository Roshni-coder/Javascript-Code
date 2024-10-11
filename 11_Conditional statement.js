// if...else statements

let a=10
if (a > 0) {
    console.log("this is valid positive !");
}
else {
    console.log("this is invalid nagative !");
}


//if..elseif..else

// if (a < 0) {
//     console.log("this is invalid age")
// }
// else if (a < 9) {
//     console.log("you are kid you can't thing drive");
// }
// else if (a >= 9 && a < 18) {
//     console.log("you are kid you can think about drive");
// }
// else {
//     console.log("you can drive");
// }

                    // ternory operatore

// console.log("you can", (a <= 18 ? "not" : "drive"));

                    // Switch statement
                    
                    let day = 1;
                    day = parseInt(day);
                    
                    switch (day) {
                        case 1:
                            console.log("Day is Monday");
                            break;
                        case 2:
                            console.log("Day is Tuesday");
                            break;
                        case 3:
                            console.log("Day is Wednusday");
                            break;
                        case 4:
                            console.log("Day is Thusday");
                            break;
                        case 5:
                            console.log("Day is Friday");
                            break;
                        case 6:
                            alert("Day is Saturday");
                            break;
                        case 7:
                            alert("Day is Sunday");
                            break;
                        default:
                            alert("Please enter valid day");
                            
                    }