// All about Functions 


/* Below are normal examples of functions in Js below this cmt you can see function A & B are called before they are created
This is because when javascript compiles you file it takes all the functions and places at the top of the file because of that 
you have the liberty to call the function even before it is created*/
A();
B();

function A(){

    console.log("Inside Func A");

}

function B(){

    console.log("Inside Func B");


}

// Function Hoisting 


/*
    Function Hoisting is when you define a variable & initialize it with a Function, yes in js you can initialize a variable 
    with a function.
    Explained with eg below 

*/

var abc = function (){
    
    console.log("Inside C");
    return "Function Hoisting"; // this value will be returned when you call the function abc() in the console in you browser
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