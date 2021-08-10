console.log("Hello JavaScript"); // this the normal syntax to be followed if we want to print a msg on screen

let a = 10; // here 'a' is a number variable that has value 10 
console.log(a); // here we have passed the variable 'a' in the syntax to display its value on screen 

let b = [1,2,3,4,5,6,7,8,9,10]; // here also 'b' is a number variable but this time it is a number array 
console.log(b); // the way we printed value of 'a' before the same way we can print value of 'b' it dosent matter if a variabe is a array or not. 
console.log("Type of variable 'b': ",typeof(b)) // here you can see some change in the syntax, here 'typeof' is an inbuilt method which returns the typeof of the variale passed. [Check console window]

//Variable Scopes : 


fun(); // here you can see the function fun has been called even before it is created to find how this works visit the link that I have provided at the end of this file. 

c =100; //Global
var e = 200; // Function Scope
let d =300; // Block Scope

function fun(){

    var r = 20; // function scope limited till fun() function
    s = "Global"; // global variable s can be accessed even outside the function fun [eg demonstrated below]
    if(r==20){
        let f = 10; // block scope limited till if block 
        console.log("Inside Func", f);
        console.log("Value of r:",r);
        console.log("Value of r:",r);

    }
   // console.log("Outside Func",f) // at this line you will get error because variable f if declared with let and let has block scope i.e its limited only till if block
   console.log(s);
   console.log(s);

}
// console.log(r); // here variable r is having only function scope so it throw error
console.log(s);


/*

    This is an Alertbox created by using alert function, in this method you can pass values or strings that will be displayed 
    in the alertbox. 
    There are 2 ways of creating an alertbox one is by using window.alert, in this window is a global scope object it is optional
    to use window to create an alertbox. 

    here i have created 2 alertboxes first the alertbox using alert will be displayed and then the one made using window

    So these are 2 ways to create Alertboxes in JS
*/ 
alert('This is an alertbox');
window.alert('Alert using window');


