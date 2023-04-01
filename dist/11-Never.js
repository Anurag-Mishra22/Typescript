"use strict";
// never type ts provide
function getUserFromDatabase() {
    throw new Error("User not found");
    // return {
    //     name:"anurag",
    //     age:54,
    // }
    // here we have made this function as never => that this function is not going to return  any thing    
}
