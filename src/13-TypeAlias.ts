//Type alias
// used for making custom type


type User = {
    name :string;
    age:number;
    address?:string;   // we have make this optional
}

// const user:User = {
//      name:"anurag",
//      age:20
// }

function login(userData:User):User {
    return userData;
}

const user:User = {
     name:"anurag",
     age:20
}
login(user);



type ID = number | string;  // here | is union it acts as OR


const userId:ID = 123;