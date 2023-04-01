// any type typescript provide
// note-> don't use any always.

var text:any = 22;

text = "hello"

text= function () {
    console.log("this is funciton")
}

text = {
    id:1,
    name:"anurag"
}

function getText(id:any):any {
    return "this is text"
}