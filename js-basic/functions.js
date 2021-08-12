// All about Functions 


/*  Below are normal examples of functions in Js below this cmt you can see function A & B are called before they are created
    This is because when javascript compiles you file it takes all the functions and places at the top of the file because of that 
    you have the liberty to call the function even before it is created
    And in js you can return anything in a function I given eg of that in the below examples

*/
A();
B();

function A(){

    console.log("Inside Func A");
    return 10;                      // this value will be returned when you call the function A() in the console in you browser
}

function B(){

    console.log("Inside Func B");
    return "Return type eg";        // this value will be returned when you call the function B() in the console in you browser

}

// Function Hoisting 


/*
    Function Hoisting is when you define a variable & initialize it with a Function, yes in js you can initialize a variable 
    with a function.
    Explained with eg below 

*/

var abc = function (){
    
    console.log("Inside C");
    return "Function Hoisting"; 
}

abc(); // here we are calling abc as it is initialized with a function and on call it returns the value of the function


// xyz(); // you will get error at this line, Why explained below 

var xyz = function(){


    console.log("Inside xyz");
    
}

/*  
    In the abv eg xyz is called before its creation same like the very 1st example 
    But here the difference is this time xyz() is not a normal function but it is an hoisted function 
    so a hoisted function cant be called before its creation 
*/

/* Arrays in JS */

let arr = ['BMW', 'Lambo', 'Benz', 'Audi']; // array creation 

for(let i=0; i<4; i++)
{

    console.log(arr[i]); // for loop to access and print each element of array 
}

arr.push("Rolls-Royce"); // push is used to append the array with and element at the last
arr.pop();  // pop is used to remove/delete the last element of the array
arr.shift(); // shift is used to remove the 1st element of the array
arr.unshift("Ferrari"); // unshift is used to add a new element at the start of the array 


if(arr[0]=='BMW'){

    console.log('Yes it is BMW');
}
else{
    console.log("No it is",arr[0]);
}