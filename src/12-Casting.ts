//type casting
//<type>
//as keyword

//Method1..........................................
// var person = {
//     name:"anurag",
//     age:22
// };
// person.email = "test123@gmail.com"; error!!

//  method 2...................................
// var person  = <any> {
//     name:"anurag",
//     age:22
// };

// person.email = "test123@gmail.com";


var person  =  {
    name:"anurag",
    age:22
}as any;

person.email = "test123@gmail.com";