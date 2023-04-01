//unknown is a type in ts which is same as any type.
//The difference between the two,however
//is that a variable of type unknown cannot be assigned to a known type without explicit casting.

var master:unknown = "this is master";

master = 1;


var master2:string = "this is master 2";

// master2 = master   error
//How ever we can do this->
master2 = <string>master;

var yes:any = "this is test22";

master = yes; // no error

