console.log("Hello JavaScript"); // this the normal syntax to be followed if we want to print a msg on screen

let a = 10; // here 'a' is a number variable that has value 10 
console.log(a); // here we have passed the variable 'a' in the syntax to display its value on screen 

let b = [1,2,3,4,5,6,7,8,9,10]; // here also 'b' is a number variable but this time it is a number array 
console.log(b); // the way we printed value of 'a' before the same way we can print value of 'b' it dosent matter if a variabe is a array or not. 
console.log("Type of variable 'b': ",typeof(b)) // here you can see some change in the syntax, here 'typeof' is an inbuilt method which returns the typeof of the variale passed. [Check console window]

//Variable Scopes : 

/*Here you can see variable 'z' has been declared and initizlized twice and 
its type is 'var', var type lets you redeclare variables with same name*/ 

var z =50;          
console.log(z);

var z=100; 
console.log(z);

/*Here you can see variable 'x' has been declared twice and 
its type is 'let', let type dose not allow you to redeclare variables with same name*/ 

let x = 20; // this varibale has been declared 
//let x ;     // here you will get error becase the variable named 'x' has already been declared 
console.log(x);

